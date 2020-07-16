-- drop first, create db,  --

DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

-- tables: employees, department, role --
CREATE TABLE department (
id INTEGER AUTO_INCREMENT NOT NULL, 
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INTEGER AUTO_INCREMENT NOT NULL, 
title VARCHAR(30) NOT NULL,
salary DECIMAL (10, 2) NOT NULL,
department_id INTEGER NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INTEGER AUTO_INCREMENT NOT NULL, 
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER NOT NULL,
manager_id INTEGER,
PRIMARY KEY (id)
);

    
SELECT
role.title AS Title,
role.salary AS Salary,
department.name AS Department
FROM role
INNER JOIN department ON role.department_id = department.id;


