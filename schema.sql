DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE departments (
id INT AUTO_INCREMENT PRIMARY KEY
, deptname VARCHAR(30) NOT NULL
);

CREATE TABLE positions (
id INT AUTO_INCREMENT PRIMARY KEY
, title VARCHAR(30) NOT NULL
, salary DECIMAL NOT NULL
, dept_id INT NOT NULL 
, FOREIGN KEY (dept_id) REFERENCES departments (id)
);

CREATE TABLE employees (
id INT AUTO_INCREMENT PRIMARY KEY
, first_name VARCHAR(30) NOT NULL
, last_name VARCHAR(30) NOT NULL
, position_id INT NOT NULL
, manager_id INT
, FOREIGN KEY (position_id) REFERENCES positions (id)
, FOREIGN KEY (manager_id) REFERENCES employees (id)
);