/** @format */

const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "employee_db",
});

connection.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("connected as id " + connection.threadId);
	return start();
});

//start menu
function start() {
	return inquirer
		.prompt({
			name: "startApp",
			type: "list",
			message: "What would you like to do?",
			choices: [
				"Add new department",
				"View Departments",
				"Add new role",
				"View Roles",
				"Add new Employee",
				"View employee(s)",
				"Update employee role(s)",
			],
		})
		.then((answer) => {
		// 	// based on their answer, call appropriate functions
		 	let answer1 = answer.startApp;
		 	if (answer1 === "Add new department") {
		 		return addNewDept();
		// 	} else if (answer1 === "View Departments") {
		// 		return viewDept();
		// 	} else if (answer1 === "Add new role") {
		// 		return addRole();
		// 	} else if (answer1 === "View Roles") {
		// 		return viewRole();
		// 	} else if (answer1 === "Add new Employee") {
		// 		return addEmployee();
		// 	} else if (answer1 === "View employee(s)") {
		// 		return viewEmployee();
		// 	} else if (answer1 === "Update employee role(s)") {
		// 		return updateEmployeeRole();
		 	} else {
		 		connection.end();
		 	}
		 })
		 .catch((error) => {
		 	console.log(error);
			process.exit(1);
		});
}

function addNewDept() {
  // prompt for info about department being added
  return inquirer
    .prompt([
      {
        name: "deptName",
        type: "input",
        message: "What is the name of the department?",
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      return connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.deptName,
        },
        (err) => {
          if (err) {
            throw err;
          }
          console.log("Your department has been added successfully!");
          // re-prompt the user for if they want to bid or post
          return start();
        }
      );
    });
}
  

// viewDept();
// addRole();
// viewRole();
// addEmployee();
// viewEmployee();
// updateEmployeeRole();