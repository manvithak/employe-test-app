import { Request } from 'express';

export interface Employe {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  mobile: string;
  address: string;
  city: string;
  designation: string;
  department: number;
  status: string;
  salary?: string;
}

export interface Department {
    id: number;
    name: string;
    description: string;
    status: string
}

export interface SalaryDetails {
    id: number,
    employeId: number,
    salary: string
}

export interface EmployeDetails {
    department: number,
    status: string,
    details: Array<Employe>
}

export interface EmployeBasicInfo {
    'Name': string,
    'Designation': string,
    'Salary': string,
    'Communication': string
}

export interface MaxSalary {
    'max_salary': number
}

export interface GenderGroupBySalary {
    'gender': string,
    'salary': number
}
