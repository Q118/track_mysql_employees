# Task List
- setup
  - create repo /
  - add .gitignore with node_modules /
  - initialize npm (`npm init`) /
  - install dependencies (inquirer, mysql, console.table) /

-build database in workbench then add to vscode  /
- Establish a connection to the database /
- Prompt user to choose action (start menu) 
  Should provide following commands:
```
Minimum ones first
  - Add new department
  - View Departments
  - Add new role
  - View Roles
  - Add new Employee
  - View employee
  - Update employee role

if time, add more like in gif
```
- Add new department
  - Create addDepartment function /
  - prompt user for a department name /
  - create query string to create department
  - run connection.query
  - if there is an error
  - then print unable to process
  - else print success message
  - call start menu
- View Departments
- Add new role
- View Roles
- Add new Employee
- View employee
- Update employee role



//first make start prompt
what would you like to do
  
  based on choice...


  functions
  all in list above getting called corresponding to answer provided

function names();
addNewDept
viewDept
addRole
viewRole
addEmployee
viewEmployee
updateEmployeeRole
