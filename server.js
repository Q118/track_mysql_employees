/** @format */

const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const figlet = require("figlet");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "employee_db",
});

figlet("EMPLOYEE TRACKER", function (err, data) {
	if (err) {
		console.log("Something went wrong...");
		console.dir(err);
		return;
	}
	console.log(data);
});

connection.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("connected as id " + connection.threadId + `\n `);

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
				"Exit",
			],
		})
		.then((answer) => {
			// 	// based on their answer, call appropriate functions
			let answer1 = answer.startApp;
			if (answer1 === "Add new department") {
				return addNewDept();
			}
			if (answer1 === "View Departments") {
				return viewDept();
				// 	}  if (answer1 === "Add new role") {
				// 		return addRole();
			}
			if (answer1 === "View Roles") {
				return viewRole();
				// 	}  if (answer1 === "Add new Employee") {
				// 		return addEmployee();
			}
			if (answer1 === "View employee(s)") {
				return viewEmployee();
			}
			if (answer1 === "Update employee role(s)") {
				return updateEmployeeRole();
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

function viewDept() {
	const sqlString = `
	SELECT * FROM employee_db.department;`;
	//no values below bc no ?s
	connection.query(sqlString, (error, results) => {
		if (error) {
			throw error;
		}
		console.log(
			`\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.\n	All Departments\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.`
		);
		console.table(results);
		//time to use console.table
		return start();
	});
}

// addRole();

function viewRole() {
	const sqlString = `SELECT
	role.title AS Title,
	role.salary AS Salary,
	department.name AS Department
	FROM role
	INNER JOIN department ON role.department_id = department.id;`;
	//no values below bc no ?s
	connection.query(sqlString, (error, results) => {
		if (error) {
			throw error;
		}
		console.log(
			`\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.\n	All Roles\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.`
		);
		console.table(results);
		//time to use console.table
		return start();
	});
}
// addEmployee();

function viewEmployee() {
	const sqlString = `
	SELECT
	  CONCAT(employee.first_name, " ", employee.last_name) AS Name,
	  role.title AS Role,
	  department.name AS Department
	FROM employee
	INNER JOIN role ON employee.role_id = role.id
	INNER JOIN department ON role.department_id = department.id;`;
	//no values below bc no ?s
	connection.query(sqlString, (error, results) => {
		if (error) {
			throw error;
		}
		console.log(
			`\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.\n	All Employees\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.`
		);
		console.table(results);
		//time to use console.table
		return start();
	});
}

function updateEmployeeRole() {
	// get all the employees
	const sqlString = `SELECT
	  CONCAT(employee.first_name, " ", employee.last_name) AS Name,
	  role.title AS Role,
	  employee.id AS EmployeeID
	FROM employee
	INNER JOIN role ON employee.role_id = role.id`;
	connection.query(sqlString, (error, results) => {
		// display the results a formatted table
		if (error) {
			throw error;
		}
		console.log(
			`\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.\n	All Employees\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.`
		);
		console.table(results);
		inquirer
			.prompt({
				name: "employeeId",
				type: "input",
				message: "Enter the id for the employee you wish to update.",
			})
			.then((userChoiceAnswers) => {
				connection.query(
					`SELECT
				role.title AS Title,
				role.salary AS Salary,
				role.ID AS RoleID
				FROM role
				INNER JOIN department ON role.department_id = department.id;`,
					(error, results) => {
						if (error) {
							throw error;
						}
						console.log(
							`\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.\n	All Roles\n.:*~*:._.:*~*:._.:*~*:._.:*~*:.`
						);
						console.table(results);
						inquirer
							.prompt({
								name: "roleId",
								type: "input",
								message:
									"Enter the role id you wish to assign to the employee.",
							})
							.then((roleChoiceAnswers) => {
								const employeeId = userChoiceAnswers.employeeId;
								const roleId = roleChoiceAnswers.roleId;
								connection.query(
									"UPDATE employee SET id = ? WHERE role_id = ?;",
									[employeeId, roleId],
									(error, results) => {
										if (error) {
											throw error;
										}
										console.log(
											`_,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,_`
										);
										console.log(
											"Successfully updated employee with id " +
												employeeId +
												" to the role id of " +
												roleId +
												"!"
										);
										console.log(
											`_,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,__,.-'~'-.,_`
										);
										start();
									}
								);
							});
					}
				);
			});
	});
}
