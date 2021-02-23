const Employee = require("../lib/Employee");

describe("Employee", () => {
    
    test("Has Name first and last, capitilized", () => {
        const name = "Bob Smith";
        const employee = new Employee(name);
        expect(employee.getName(name)).toBe(name);
    });
    
        test('Has ID', () => {
            const name = "Bob Smith";
            const id = 30;
            const employee = new Employee(name, id);
            expect(employee.getId(id)).toBe(id);
        });
    
        test('Has email', () => {
            const name = "Bob Smith";
            const id = 30;
            const email = "bob@bob.com";
            const employee = new Employee(name, id, email);
            expect(employee.getEmail(email)).toBe(email);
        });
    
        test('Is employee', () => {
            const name = "Bob Smith";
            const id = 30;
            const email = "bob@bob.com";
            const role = "Employee";
            const employee = new Employee(name, id, email, role)
            expect(employee.getRole(role)).toBe(role);
        });
});
