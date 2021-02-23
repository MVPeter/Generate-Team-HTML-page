class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // const capName = name.toLowerCase()
      
        return this.name
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getEmployee() {
        return "Employee";
    }
}

module.exports = Employee;