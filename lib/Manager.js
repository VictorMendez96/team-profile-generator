const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

    }

    // Overwrite Employee Role
    getRole () {

    }
};

module.exports = Manager;