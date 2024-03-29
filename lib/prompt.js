//Import dependecies
// Inquirer simplifies the process of gathering user input and handling user interactions within command-line applications
const inquirer = require('inquirer');

const firstPrompt = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "Would you like to do?",
      choices: [
        "View Employees",
        "View Employees by Department",
        "Add Employee",
        "Remove Employees",
        "Update Employee Role",
        "Add Role",
        "End"]
    })
}

const promptDepartment = (departmentChoices) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "departmentId",
        message: "Which department would you like to choose?",
        choices: departmentChoices
      }
    ])
}

const promptAddEmployee = (roleChoices) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?"
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?"
      },
      {
        type: "list",
        name: "roleId",
        message: "What is the employee's role?",
        choices: roleChoices
      },
      {
        type: "list",
        name: "manager_id",
        message: "Select the employee's manager:",
        choices: managerChoices
      }
    ])
}

const promptDeleteEmployee = (deleteEmployeeChoices) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee do you want to remove?",
        choices: deleteEmployeeChoices
      }
    ])
}

// This function prompts the user to select an employee and a role from the provided lists. 
// It returns a Promise that resolves to an object containing the user's selections.
// A part of the process to update the role of an employee. 
// It is responsible for prompting the user and gathering the necessary input, i.e., which employee's role to update and what the new role should be. It doesn't perform the update itself.
const promptEmployeeAndRole = (employeeChoices, roleChoices) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee's role do you want to change?",
        choices: employeeChoices
      },
      {
        type: "list",
        name: "roleId",
        message: "Which new role do you want to assign?",
        choices: roleChoices
      },
    ])
}

const promptAddRole = (departmentChoices) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "Role title?"
      },
      {
        type: "input",
        name: "roleSalary",
        message: "Role Salary"
      },
      {
        type: "list",
        name: "departmentId",
        message: "Department?",
        choices: departmentChoices
      },
    ])
}

module.exports = {
  firstPrompt,
  promptDepartment,
  promptAddEmployee,
  promptDeleteEmployee,
  promptEmployeeAndRole,
  promptAddRole
}
