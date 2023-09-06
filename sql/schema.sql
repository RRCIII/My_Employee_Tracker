-- database created 
DROP DATABASE IF EXISTS employee_tracker_data;
CREATE DATABASE IF NOT EXISTS employee_tracker_data;
USE employee_tracker_data;

-- tables created for department, role, and employee 
CREATE TABLE department (
    id INT AUTO_INCREMENT, 
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,0),
    department_id INT, 
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, 
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);




