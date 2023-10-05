// CommonJS import statements
const inquirer = require("inquirer");
const asciiArt = require("./src/ascii");
const index = require("./src/index");

// Start application with ASCII Art, followed by the main inquirer.js prompts
const startTracker = () => {
  asciiArt();
  setTimeout(() => {
    promptInquirer();
  }, 1550);
};

// Function for going back to the main prompts after 500 milliseconds
const recallPrompt = () => {
  setTimeout(() => {
    promptInquirer();
  }, 500);
};

// Prompt inquirer.js using async-await
const promptInquirer = async () => {
  try {
    const data = await inquirer.prompt({
      name: "main",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Remove a department",
        "Remove a role",
        "Remove an employee",
        "Update an employee role",
        "Update employee managers",
        "View employees by manager",
        "View employees by department",
        "View total utilized budget of department",
        "Quit",
        /*
         Extra credit added:
         "View employees by manager"
         "view employees by department"
         "Update employee managers"
         "Delete departments, roles, and employees"
         "View total utilized budget of department"
        */
      ],
    });

    // Destructure key of main from object being returned
    const { main } = data;

    // Switch statements for what functions to be called, in order to query from the database
    switch (main) {
      case "View All Departments":
        index.viewDepartments().then(recallPrompt);
        break;
      case "View All Roles":
        index.viewRoles().then(recallPrompt);
        break;
      case "View All Employees":
        index.viewEmployees().then(recallPrompt);
        break;
      case "Add a department":
        index.addDepartment().then(recallPrompt);
        break;
      case "Add a role":
        index.addRole().then(recallPrompt);
        break;
      case "Add an employee":
        index.addEmployee().then(recallPrompt);
        break;
      case "Remove a department":
        index.removeDepartment().then(recallPrompt);
        break;
      case "Remove a role":
        index.removeRole().then(recallPrompt);
        break;
      case "Remove an employee":
        index.removeEmployee().then(recallPrompt);
        break;
      case "Update an employee role":
        index.updateRole().then(recallPrompt);
        break;
      case "Update employee managers":
        index.updateManager().then(recallPrompt);
        break;
      case "View employees by manager":
        index.viewByManager().then(recallPrompt);
        break;
      case "View employees by department":
        index.viewByDepartment().then(recallPrompt);
        break;
      case "View total utilized budget of department":
        index.viewBudget().then(recallPrompt);
        break;
      case "Quit":
        console.log("Oh, thank god!");
        process.exit(0);
    }
  } catch (err) {
    console.log(err);
  }
};

startTracker();

module.exports = recallPrompt;