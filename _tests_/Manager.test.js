const Employee = require("../lib/Employee");
const Manager = require('../lib/Manager');

describe("Manager", () => {
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
        expect(employee.id).toBe(id);
    
    });
    
    test('Has email', () => {
        const name = "Bob Smith";
        const id = 30;
        const email = "bob@bob.com";
        const employee = new Employee(name, id, email);
        expect(employee.getEmail(email)).toBe(email);
    });
});


    test('Has office number', () => {
        const name = "Bob Smith";
        const id = 30;
        const email = "bob@bob.com";
        const office = "33B"
        const manager = new Manager(name, id, email, office)
        expect(manager.getOfficeNumber(office)).toBe(office);
    })
});