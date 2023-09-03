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
// "View All Departments" 
const viewAllDepartments = async () => {
    const [rows] = await pool.query("SELECT * FROM department;");
    console.table(rows)
};

// "View All Roles"
const viewAllRoles = async () => {
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
const viewAllEmployees = async () =>{
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
            type: "inout",
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
        return viewAllDepartments();
    } catch (err) {
        console.log(err);
    }
};

