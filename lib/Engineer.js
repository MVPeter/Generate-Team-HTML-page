const Employee = require("./lib/Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }

    returngitHub() {
        return this.gitHub;
    }

    returnEmployee() {
        return "Employee";
    }
}

module.exports = Engineer;