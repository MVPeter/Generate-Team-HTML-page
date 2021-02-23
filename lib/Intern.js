const Employee = require("./lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.employeeName = name;
        this.employeeId = id;
        this.employeeEmail = email;
        this.school = school;
    }

    returngitHub() {
        return this.gitHub;
    }

    returnEmployee() {
        return "Employee";
    }
}

module.exports = Engineer;