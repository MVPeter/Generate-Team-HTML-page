const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Employee Name", () => { 
    test("Has Name first and last, capitilized", () => {
        const name = "Bob Smith";
        const employee = new Employee(name);
        expect(employee.returnName(name)).toBe(name);
    });
});

    test('Has ID', () => {
        const name = "Bob Smith";
        const id = 30;
        const employee = new Employee(name, id);
        expect(employee.id).toBe(id);

    });

    test('Has email', () => {
        const name = "Bob Smith";
        const id = 30;
        const email = "bob@bob.com"
        const employee = new Employee(name, id, email);
        expect(employee.returnEmail(email)).toBe(email);
    });
});