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

class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

class Engineer {
    constructor(github){
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

class Intern {
    constructor(school) {
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return 'Intern';
    }
}

