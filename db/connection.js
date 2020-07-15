const mysql = require("mysql");
const inquirer = require("inquirer");

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
  connection.end();
});