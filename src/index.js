//  Node packages: inquirer@8.2.4 & mysql2
const { query } = require("express");
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

// "View All Departments" 
const viewDepartments = async () => {
    const [rows] = await pool.query("SELECT * FROM department;");
    console.table(rows)
};

// "View All Roles"
const viewRoles = async () => {
    let query = `
    SELECT r.id,
           r.title,
           r.salary,
           r.department_id,
           d.name
    FROM role r
    JOIN department d ON r.department_id = d.id;
    `;

    const [rows] = await pool.query(query);
    console.table(rows);
};

//"View All Employess"
const viewEmployees = async () =>{
    let query = ` 
      SELECT e.id,
             e.first_name,
             e.last_name,
             e.manager_id,
             r.title,
             r.salary,
             d.name
        FROM employee e
        JOIN role r ON e.role_id = r.id
        JOIN department dON r.department_id = d.id
        ORDER BY e.id; 
        `;
    const [rows] =await pool.query(query);
    console.table(rows);
};

// "Add a department"
const addDepartment = async () => {
    try {
        const dept = await inquirer.prompt({
            name: "deptAdded",
            type: "input",
            message: "Name of the department:",
            valdiate: (name) => {
                return name 
                ? true
                : console.log("Please enter a name for the department:", false);
            },
        });
        const { deptAdded } = dept;

        await pool.query(
            `
            INSERT INTO department (name)
            VALUES (?)`,
            [deptAdded]
        );
        return viewDepartments();
    } catch (err) {
        console.log(err);
    }
};

// "Add a role" 
const addRole = async () => {
    try {
        const [departments] = await pool.query(`SELECT * FORM department;`);
        const deptName = departments.map((dept) => dept.name).filter(arr => arr != null);
        
        const role = await inquirer.prompt([
            {
                name:"roleTitle",
                type: "input",
                message: "Title of the role",
                validate: (title) => {
                    return title
                    ? true
                    : console.log("Please enter a title for the role:", false);
                },
            },
            {
                name:"roleSalary",
                type: "input",
                message: "Salary of the role",
                validate: (salary) => {
                    return salary
                    ? true
                    : console.log("Please enter a title for the role:", false);
                },
            },
            {
                name:"roleDeptName",
                type: "list",
                message: " Which deapartment does the role belong ",
                choices: [... deptName],
            
            },
          
        ]);
        const { roleTitle, roleSalary, roleDeptName } = role;

        const selectDept = departments.find((dept) => dept.name === roleDeptName);
        const roleDeptId = selectDept.id;

        await pool.query(
            `INSERT INTO role (title, salary, department_id)
            VALUES (?, ?, ?)`,
            [roleTitle, roleSalary, roleDeptId]
        );
        return await viewRoles();
    } catch (err) {
        console.log(err);
    }
};

//  "Add Employee "
const addEmployee = async () => {
    try {
        const [roles] = await pool.query(`SELECT * FROM role`);
        const roleTitle = roles.map((role) => role.title).filter(arr => arr != null);

        const [managers] = await pool.query(`SELECT * FROM employee`);
        const managerName = managers.map(
            (name) => `${name.first_name} ${name.last_name}`
        );

        const employee =await inquirer.prompt([
            {
                name: "firstname",
                type: "input",
                messasge: "First name of the employee:",
                validate: (first) => {
                    return first 
                    ? true 
                    : console.log("Please enter a first name of the employee", false);
                },
            },
            {
                name: "lastname",
                type: "input",
                messasge: "Last name of the employee:",
                validate: (last) => {
                    return last
                    ? true 
                    : console.log("Please enter a last of the employee", false);
                },
            },
            {
                name: "employeeRole",
                type: "list",
                messasge: "What is the employee's role?:",
                choices: [...roleTitle],
            
            },
            {
                name: "employeeManager",
                type: "list",
                messasge: "Who is the employee's manager:",
                choices: [...managerName],
            },

        ]);
        const {  firstName, lastName, employeeRole, employeeManager } = employee;

        const selectedRole = roles.find((role) => role.title === employeeRole);
        const roleId = selectedRole.id 

        const selectedManager = managers.find(
            (manager) => 
            `${manager.first_name} ${manager.last_name}` === employeeManager

        );

        const managerId = selectedManager.id;

        await pool.query(
            `INSERT INTO employee (first_name, last_name, role_name, manager_id)
            VALUES ( ?, ?, ?, ?)`,
            [firstName, lastName, roleId, managerId]
        );
        return await viewEmployees();
    } catch (err) {
        console.log(err);
    }
};

//"Remove a department"
const removeDepartment = async () => {
    try {
        const [departments] = await pool.query(`SELECT * FROM department;`);
        const deptName = departments 
        .map((dept) => dept.name)
        .filter((arr) => arr != null);

        const dept = await inquirer.prompt({
            name: "deptRemoved",
            type: "list",
            message: "Select a department to remove:",
            choices: [...deptName],
        });
        const { deptRemoved } = dept;

        await pool.query(`UPDATE department SET name = NULL WHERE name = ?;`, [
            deptRemoved,
        ]);

        await pool.query(
        `
        DELETE FROM department WHERE name = ?;
        `,
            [deptRemoved]
        );

        return await viewDepartments();
    } catch (err) {
        console.log(err);
    }
};

// "Remove a role"
const removeRole = async () => {
    try {
        const [roles] = await pool.query(`Select * FROM role;`);
        const roleTitle = roles 
            .map((role) => role.title)
            .filter((arr) => arr != null);

        const role = await inquirer.prompt({
            name: "roleRemoved",
            type: "list",
            message: "Select a role to remove:",
            choices: [...roleTitle],
        });
        const { roleRemoved } = role;

        await pool.query (
            ` UPDATE role
            SET title= NULL, salary = NULL
            WHERE title = ?
            `,
            [roleRemoved]
        );
        return await viewRoles();
    } catch (err) {
        console.log(err);
    }
};

// "Remove an employee"
const removeEmployee = async () => {
    try {
        const [employees] = await pool.
    }
}