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
  - create query string to create department /
  - run connection.query /
  - if there is an error /
  - then print unable to process /
  - else print success message /
  - call start menu /

- View Departments
  -create view dept funciton
  -no prompt
  -display the department table info
    - ...
  -back to start menu

- Add new role
  -create addrole function
  -prompt what is the title
  -prompt what is the salary
  -prompt department id
  - run connection.query 
  - if there is an error 
  - then print unable to process 
  - else print success message 
  - call start menu 

- View Roles
    -create view roles funciton
    -no prompt
    -display the roles table info
      -...
    -back to start menu

- Add new Employee
  -create add employee function
  -prompt user for employe first name
  -prompt user for employe last name
  -prompt what is the employees role id
  -promt user for the employyees mangr id (if applicable)
      -option for n/a
   - run connection.query 
  - if there is an error 
  - then print unable to process 
  - else print success message 
  - call start menu 


- View employee
    -create view employee funciton
    -no prompt
    -display the employee table info
    -back to start menu


- Update employee role
  -create update employee function
  -prompt choice of who to update
  -display list of employees already in table
  -prompt to update their role
  -display it and they choose

  -rint employee updated,
  -back to start menu




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
