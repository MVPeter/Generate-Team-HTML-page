const Employee = require('../library/Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber,) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    returnOfficeNumber() {
        return this.officeNumber;
    }

    returnManager() {
        return "Manager";
    }
}

module.exports = Manager;