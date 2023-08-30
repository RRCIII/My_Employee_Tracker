const inquirer = require('inquirer');
const { writeFileSync } = require('fs');

const { department, employee, role } = require('')

const path = process.cwd();


inquirer
    .prompt([
        {
            type: "input",
            message: "What would you like to do?",
            name: "addDepartment",
            validate: (input) => {
                if(input=== '') {
                    return "Must Add department";
                } return true;
            } 
        },
        {
            type:"input",
            message: "What is the name of the department",
            name: "departmentName"
        },
        {
            type:"input",
            message: "What is the name of the role?",
            name: "nameRole"
        },
        {
            type: "input",
            message: "What is the salary of the role?",
            name: "salary"
        },
        {
            type: "input",
            message: "Which department does the role belong to?",
            name: "department-role"
        },
        {
            type: "input",
            message:"What would you like to do?",
            name: "Add-emp"
        },
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName"
        },
        {
            type: "input",
            message:"what is the employee's last name?",
            name: "lastName"
        },
        {
            type:"input",
            message: "What is the employee's role?",
            name: 'empRole'
        },
        {
            type: "input",
            message:"Who is the employee's manager?",
            name: "epmMang"
        },
        {
            type: "input",
            message:"What would you like to do?",
            name: "updateEmpRole"
        },
        {
            type: "list",
            message:"Which employee's role would you like to update?",
            name:"empChoices",
            choices: ["me","me","me","me", "me" ,"me" ,"me"]
        }
    ]) 
    
    .then(res => {
       console.log(`You've entered ${res.name}`)
    });



