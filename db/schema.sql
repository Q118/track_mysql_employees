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

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Tom", "Ford", 1, 3);
    
DELETE FROM department WHERE id = 5;
    
    
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Elton", "John", 2, 3);

INSERT INTO role(title, salary, department_id) 
VALUES ("Song-writer", 5000000, 6);

INSERT INTO role(title, salary, department_id) 
VALUES ("Lab Tech", 90000, 3);



