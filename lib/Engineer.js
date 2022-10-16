const Employee = require('./Employee ');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name
        this.id = id
        this.email = email 
        this.github = github
    }

    getGithub () {
        return this.name
    }

    // Overwrite Employee Role
    getRole () {
        return 'Engineer'
    }
};

module.exports = Engineer;