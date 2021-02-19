class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    returnName(name) {
        const capName = name.split(" ");
        for (let i = 0; i < capName.length; i++) {
            capName[i] = capName[i][0].toUpperCase() + capName[i].substr(1);
            }
        return capName.join(" ");
    }

    returnID(id) {
        return this.id;
    }

    returnEmail(email) {
        return this.email;
    }

    returnEmployee() {
        return "Employee";
    }
}

module.exports = Employee;