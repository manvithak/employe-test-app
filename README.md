# employe-test-app

Compile and run the app with:

npx tsc
node dist/app.js

The curl commands to test the api's:

curl -k 'http://localhost:3000/employe-department-data'
curl -k 'http://localhost:3000/active-employes'
curl -k 'http://localhost:3000/employee-data'
curl -k 'http://localhost:3000/high-rank-data'
curl -k 'http://localhost:3000/salary-by-gender'