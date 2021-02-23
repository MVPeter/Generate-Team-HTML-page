const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern", () => {
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


    test('Has school name', () => {
        const name = "Bob Smith";
        const id = 30;
        const email = "bob@bob.com";
        const school = "University of Utah"
        const intern = new Intern(name, id, email, school)
        expect(intern.getSchool(school)).toBe(school);
    })
});