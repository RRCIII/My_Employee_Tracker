DROP DATABASE IF EXISTS department_db;
CREATE DATABASE IF NOT EXISTS department_db ;



CREATE TABLE IF NOT EXISTS department_db  (
    id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(30) NOT NULL 
);

CREATE TABLE IF NOT EXISTS role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) IS NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT REFERENCES department_db(id) ON DELETE SET NULL 
); 

CREATE TABLE IF NOT EXISTS employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT REFERENCES role (id) ON DELETE SET NULL,
    manager_id INT REFERNCES employee(id) ON DELETE SET NULL,
    name VARCHAR(30) NOT NULL 
); 
