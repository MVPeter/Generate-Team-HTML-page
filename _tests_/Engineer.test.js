const Employee = require("../lib/Employee");
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
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

    test('Has GitHub URL', () => {
        const name = "Bob Smith";
        const id = 30;
        const email = "bob@bob.com";
        const gitHub = "http://github.com/bob"
        const engineer = new Engineer(name, id, email, gitHub)
        expect(engineer.getGithub(gitHub)).toBe(gitHub);
    })
});