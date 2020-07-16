INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Tom", "Ford", 1, 3);

INSERT INTO department
    (name)
VALUES
    ("engineering");
INSERT INTO department
    (name)
VALUES
    ("clothing");

INSERT INTO department
    (name)
VALUES
    ("Fitness");

INSERT INTO department
    (name)
VALUES
    ("Entertainment");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Creative Director", 100000, 2);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Design DIrector", 80000, 2);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Coach", 56000, 4);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Mixologist", 80000, 1);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Lab Tech", 90000, 3);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Elon", "Musk", 1, 3);



INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Song-writer", 5000000, 6);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Lab Tech", 90000, 3);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Lead Instructor", 900000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Jane", "Fonda", 7, 3);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Lead Researcher", 800000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Stephen", "Hawking", 8, 1);


-- schema for viewing employees --
SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS Name,
    role.title AS Role,
    department.name AS Department
FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id;

-- schema for viewing departments -- 
SELECT *
FROM employee_db.department;

-- schema for viewing Roles--
SELECT
role.title AS Title,
role.salary AS Salary,
department.name AS Department
FROM role
INNER JOIN department ON role.department_id = department.id;