//Including packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateManagerHTML = require("./generateHTML");

var employees = [];
var cards = [];
//Questions array for manager
// const managerQuestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is your employee ID?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//     },
//     {
//         type: 'input',
//         name: 'phonenumber',
//         message: 'What is your office phone number?',
//     },
//     {
//         type: 'list',
//         message: 'Would you like to add an Engineer or an Intern to your team?',
//         name: 'employeetype',
//         choices: ['Engineer', 'Intern', 'None'],
//     },
// //Only question for engineer
// {
//     type: 'input',
//     name: 'github',
//     message: 'What is your GitHub username?',
// },
// ]

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

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
}

class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

class Engineer extends Employee{
    constructor(github){
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
    constructor(school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return 'Intern';
    }
}


// Function to initialize app
function init() { 
    const filename = "./my-team.html";
    inquirer.prompt(employeeQuestions).then((managerEmployeeresponses) => {
        inquirer.prompt(managerQuestions).then((managerResponses) => {
            var manager = new Manager(managerResponses.phonenumber, managerEmployeeresponses.name, managerEmployeeresponses.id, managerEmployeeresponses.email);
            employees.push(manager);
            console.log(employees)
            addEmployee();

            //Passing the responses from the user into the README file using the generateMarkdown function
            //fs.writeFile(filename, generateManagerHTML({ ...responses }), (err) =>
            //    err ? console.log(err) : console.log("Success!")
            //);
        });
        
    });

}

function addEmployee() {
    inquirer.prompt(nextEmployee).then((nextEmployeeResponses) => {
        if(nextEmployeeResponses.employeetype == 'None'){
        }
        else if(nextEmployeeResponses.employeetype == 'Engineer') {
            inquirer.prompt(employeeQuestions).then((engineerEmployeeResponses) => {
                inquirer.prompt(engineerQuestions).then((engineerResponses) => {
                    addEmployee();
                });
            });
            
        } else if (nextEmployeeResponses.employeetype == 'Intern') {
            inquirer.prompt(employeeQuestions).then((internEmployeeResponses) => {
                inquirer.prompt(internQuestions).then((internResponses) => {
                    addEmployee();
                });
            });
        }
    });
}

// Function call to initialize app
init();

