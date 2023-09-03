//  Node packages: inquirer@8.2.4 & mysql2
const inquirer = require("inquirer");
const mysql = require("mysql2");

// created a connection pool w/ mysql
const pool = mysql
    .createPool({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "employee_tracker_db"
    })
    .promise();

    