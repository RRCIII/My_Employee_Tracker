DROP DATABASE IF EXISTS department;
CREATE DATABASE IF NOT EXISTS department ;

USE department;

CREATE TABLE IF NOT EXISTS department  (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL 
);

CREATE TABLE IF NOT EXISTS role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) IS NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id REFERENCES department(id) INT NOT NULL 
); 

CREATE TABLE employee IF NOT EXISTS (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT REFERENCES department_id(id),
    manager_id REFERNCES employee(id) INT,
    name VARCHAR(30) NOT NULL 
); 
