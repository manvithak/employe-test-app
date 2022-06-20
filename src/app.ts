import express from 'express';
import EmployeController from './controllers/employe.controller';

const employeController = new EmployeController()

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/employe-department-data', employeController.getEmployeeDepartmentData)
app.get('/active-employes', employeController.getActiveEmployeeDepartmentData)
app.get('/employee-data', employeController.getEmployeeDataInArray)
app.get('/high-rank-data', employeController.getRankData)
app.get('/salary-by-gender', employeController.getSalaryByGender)

// this.router.get(`${this.path}/active-employes`, this.employeController.getActiveEmployeeDepartmentData);
// this.router.get(`${this.path}/employee-data`, this.employeController.getEmployeeDataInArray);
// this.router.get(`${this.path}/high-rank-data`, this.employeController.getRankData);
// this.router.get(`${this.path}/salary-by-gender`, this.employeController.getSalaryByGender);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});