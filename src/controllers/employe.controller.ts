import { NextFunction, Request, Response } from 'express';
import { EmployeDetails, EmployeBasicInfo, Employe } from '../interfaces/employe.interface';
import { convertNestedJSONToArray, getMergedArray } from '../utils/util';
import { employes, departments, salaryDetails } from '../config/mock-data';
import _ from 'lodash';

class EmployeController {
  // Question Number 1.
  public getEmployeeDepartmentData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let employeDepartmentData: EmployeDetails[];
      employeDepartmentData = getMergedArray()
      if (!employeDepartmentData) {
        res.status(500).json({message: 'Internal Error, Please try after sometime.'})
      }
      res.status(200).json({ data: employeDepartmentData, message: 'Employee details group by departments.' });
    } catch (error) {
      console.log("Error in getEmployeeDepartmentData:: ", error)
      next(error);
    }
  };
  //Question Number 2
  public getActiveEmployeeDepartmentData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employeDepartmentData: EmployeDetails[] = getMergedArray()
      if (!employeDepartmentData) {
        res.status(500).json({message: 'Internal Error, Please try after sometime.'})
      }
      let filterActiveDepartments = {}

      //Filtering active departments from the JSON in step1.
      if (employeDepartmentData) {
        for(let key in employeDepartmentData){
          let filteredDepartment = departments.filter(department => (department.id == Number(key) && department.status == 'Active'))
          if(filteredDepartment && filteredDepartment.length > 0){
            filterActiveDepartments[key] = employeDepartmentData[key]
          }
        }
      }
      if (filterActiveDepartments) {
        for(let key in filterActiveDepartments){
          if (employeDepartmentData[key]&&employeDepartmentData[key].length > 0) {
            let filteredEmployees = employeDepartmentData[key].filter(employe => (employe.status == 'Active'))
            filterActiveDepartments[key] = filteredEmployees
          }
        }
      }
      
      res.status(200).json({ data: filterActiveDepartments, message: 'Active Employees from Active Departments' });
    } catch (error) {
      console.log("Error in getEmployeeDepartmentData:: ", error)
      next(error);
    }
  };

  //Question Number 3
  public getEmployeeDataInArray = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // We can fetch the employe data with required info with a db query, since the question mentioned to modify the array and build one dimensional array.
      const employeDepartmentData: EmployeDetails[] = getMergedArray()
      const oneDimensionalEmployeArray: EmployeBasicInfo[] = convertNestedJSONToArray(employeDepartmentData)
      res.status(200).json({ data: oneDimensionalEmployeArray, message: 'One Dimesional Array with Employee data' });
    } catch (error) {
      console.log("Error in getEmployeeDataInArray:: ", error)
      next(error);
    }
  };

  //Question Number 4
  public getRankData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let maxSalary = salaryDetails.reduce((max, obj) => (Number(max.salary.replace(/,/g, '')) > Number(obj.salary.replace(/,/g, ''))) ? max : obj);
      const employeId = maxSalary.employeId
      let highRankEmployee = null;
      let highRankDept = null;
      if (employeId) {
        highRankEmployee = employes.filter(employe => employe.id == employeId)
        if(highRankEmployee && highRankEmployee.length > 0){
          highRankDept = departments.filter(dept => dept.id == highRankEmployee[0].department)
        }
      }
      let highRankDepartmentEmployee = {
        employe: highRankEmployee,
        department: highRankDept
      }

      res.status(200).json({ data: highRankDepartmentEmployee, message: 'High Rank employees and department' });
    } catch (error) {
      console.log("Error in getEmployeeDataInArray:: ", error)
      next(error);
    }
  };

  //Question Number 5
  public getSalaryByGender = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // There is no requirement to get data from step 1, so using db queries

      let salaryByGender = []
      const mergedData = _.merge(_.keyBy(salaryDetails, 'employeId'), _.keyBy(employes, 'id'));
      const values = _.values(mergedData);
      let salaryGenderData = _.groupBy(values, 'gender')
      for (let key in salaryGenderData) {
        let genderArr = salaryGenderData[key]
        let salarySum = 0
        genderArr.forEach(salaryObj => {
          salarySum += Number(salaryObj.salary.replace(/,/g, ''))
        })
        salaryByGender.push({
          'gender': key,
          salarySum: salarySum
        })
      }
      res.status(200).json({ data: salaryByGender, message: 'Sum of salary based on gender' });
    } catch (error) {
      console.log("Error in getSalaryByGender:: ", error)
      next(error);
    }
  };
}

export default EmployeController;
