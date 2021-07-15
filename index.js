//Including packages for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');

//Questions array for manager
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
]


// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }

//     getName() {
//         return this.name;
//     }

//     getID() {
//         return this.id;
//     }

//     getEmail () {
//         return this.email;
//     }

//     getRole () {
//         return 'Employee';
//     }
// }

// class Manager extends Employee {
//     constructor(officeNumber) {
//         super(name, id, email)
//         this.officeNumber = officeNumber;
//     }

//     getRole() {
//         return 'Manager';
//     }
// }

// class Engineer extends Employee{
//     constructor(github){
//         super(name, id, email)
//         this.github = github;
//     }

//     getGithub() {
//         return this.github;
//     }

//     getRole() {
//         return 'Engineer';
//     }
// }

// class Intern {
//     constructor(school) {
//         super(name, id, email)
//         this.school = school;
//     }

//     getSchool () {
//         return this.school;
//     }

//     getRole () {
//         return 'Intern';
//     }
// }

inquirer
    .prompt(managerQuestions)
    .then((responses) => {
        const filename = "./my-team.html";

        //Passing the responses from the user into the README file using the generateMarkdown function
        fs.writeFile(filename, generateHTML({...responses}), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });