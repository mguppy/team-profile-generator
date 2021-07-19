//Including packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const team = require("./generateHTML");
// const generateEngineerHTML = require("./generateHTML");
// const generateInternHTML = require("./generateHTML");
// const generateHTML = require("./generateHTML");

var employees = [];
var cards = [];

//Questions array for all employees
const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

//Questions array for manager
const managerQuestions = [
    {
        type: "input",
        name: "phonenumber",
        message: "What is your office phone number?",
    },
];

// Questions array for engineer
const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
];

// Questions array for intern
const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What school did you go to?",
    },
];

// Question to add an additional employee
const nextEmployee = [{
    type: "list",
    message: "Would you like to add an Engineer or an Intern to your team?",
    name: "employeetype",
    choices: ["Engineer", "Intern", "None"],
},
];

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}


// Function to initialize app
function init() {
    //Gets responses for manager and pushes answers from manager object into employees array
    inquirer.prompt(employeeQuestions).then((managerEmployeeresponses) => {
        inquirer.prompt(managerQuestions).then((managerResponses) => {
            var manager = new Manager(managerResponses.phonenumber, managerEmployeeresponses.name, managerEmployeeresponses.id, managerEmployeeresponses.email);
            employees.push(manager);
            addEmployee();
        });

    });

}

function addEmployee() {
    // Ask manager if there is another employee on the team.  If "None" is selected, no more questions appear and the cards are generated for employees in the employees array
    inquirer.prompt(nextEmployee).then((nextEmployeeResponses) => {
        if (nextEmployeeResponses.employeetype == 'None') {

            //Loop to go through employees array and push a card for each employee to the cards array
            for (let index = 0; index < employees.length; index++) {
                var thisemployee = employees[index];
                if (thisemployee.getRole() == 'Engineer') {
                    cards.push(team.generateEngineerHTML(thisemployee));
                }
                if (thisemployee.getRole() == 'Manager') {
                    cards.push(team.generateManagerHTML(thisemployee));
                }
                if (thisemployee.getRole() == 'Intern') {
                    cards.push(team.generateInternHTML(thisemployee));
                }
            }

            // Passing the responses from the user into the HTML file based on employees that manager entered
            const filename = "./my-team.html";
            console.log(team.generateHTML(cards));
            fs.writeFile(filename, team.generateHTML(cards), (err) =>
                err ? console.log(err) : console.log("Success!")
            );
        }
        // Asks the manager to answer the engineer questions and based on those answers, a new engineer is put into the employees array
        else if (nextEmployeeResponses.employeetype == 'Engineer') {
            inquirer.prompt(employeeQuestions).then((engineerEmployeeResponses) => {
                inquirer.prompt(engineerQuestions).then((engineerResponses) => {
                    var engineer = new Engineer(engineerResponses.github, engineerEmployeeResponses.name, engineerEmployeeResponses.id, engineerEmployeeResponses.email);
                    employees.push(engineer);
                    addEmployee();
                });
            });
        // Asks the manager to answer the intern questions and based on those answers, a new intern is put into the employees array
        } else if (nextEmployeeResponses.employeetype == 'Intern') {
            inquirer.prompt(employeeQuestions).then((internEmployeeResponses) => {
                inquirer.prompt(internQuestions).then((internResponses) => {
                    var intern = new Intern(internResponses.school, internEmployeeResponses.name, internEmployeeResponses.id, internEmployeeResponses.email);
                    employees.push(intern);
                    addEmployee();
                });
            });
        }
    });
}


// Function call to initialize app
init();

