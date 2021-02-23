class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    returnName() {
        // const capName = name.toLowerCase()
      
        return this.name
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