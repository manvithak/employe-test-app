import { Employe, EmployeDetails, EmployeBasicInfo } from "../interfaces/employe.interface";
import _ from 'lodash';
import { employes, departments, salaryDetails } from '../config/mock-data';

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const getMergedArray = () => {
  let employeDepartmentData: EmployeDetails[];
  const mergedData = _.merge(_.keyBy(salaryDetails, 'employeId'), _.keyBy(employes, 'id'));
  const values = _.values(mergedData);
  employeDepartmentData = _.groupBy(values, 'department')
  return employeDepartmentData;
}

export const convertNestedJSONToArray = (departmentInfo: Array<any>) => {
  try {
    let employeesInfo = [] //The one-dimesional array to which the details json of each employee will be pushed
    for (let key in departmentInfo) {
      let obj:EmployeBasicInfo;
      if(departmentInfo[key] && departmentInfo[key].length > 0){
        departmentInfo[key].forEach(employee => {
          if (employee && employee.id) {
            obj = {
              'Name': employee.firstName?employee.firstName:'' + employee.lastName?employee.lastName:'',
              'Designation': employee.designation,
              'Salary': '$ ' + (employee.salary ? employee.salary : 0).toString(),
              'Communication': constructAddress(employee)
            }
            employeesInfo.push(obj)
          }
        })
      }
    }
    return employeesInfo;
  }
  catch (err) {
    console.log("Error in convertNestedJSONToArray for departInfo:: ", JSON.stringify(departmentInfo), " Error:: ", err)
  }
}

const constructAddress = (employee: Employe) => {
  let addressString = ''
  addressString = employee.address ? employee.address + ', ' : ''
  addressString = (addressString) + (employee.city ? employee.city + ', ' : '')
  addressString = (addressString) + (employee.email ? employee.city + ' and ' : '')
  addressString = (addressString) + (employee.mobile ? employee.mobile : '')
  return addressString;
}
