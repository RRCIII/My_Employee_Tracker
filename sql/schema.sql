-- database created 
DROP DATABASE IF EXISTS employee_tracker_data;
CREATE DATABASE IF NOT EXISTS employee_tracker_data ;
USE employee_tracker_data;

-- tables created for department, role anf employee 
CREATE TABLE department (
    id INT AUTO_INCREMENT, 
    name VACHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,0),
    department_id INT, 
    PRIMARY KEY(id),
    FOREING KEY (department_id) REFERNCE department_id
);

CREAT TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT, 
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERNCE role(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);




