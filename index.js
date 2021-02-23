//required modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

//file name and location of output.
const filePath = "../dist/";

//write the file.
// const writeFileAsync = util.promisify(fs.writeFile);
const employeeChoice = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "roleChoice",
            message: "Do you want add one of the following or exit? ",
            choices: ["Engeneer", "Intern", "EXIT"]
        }
    ]).then(choiceAnswer => {
        console.table(choiceAnswer)
        //write manager to HTML
        if (choiceAnswer.roleChoice !== "EXIT") {
            //append engeneer to HTML
            if (choiceAnswer.roleChoice === "Engeneer") {
                engeneerPrompts();

            } else if (choiceAnswer.roleChoice === "Intern") {
                //Append Inter to HTML
                internPrompts();

            } else
                //Write the end of the file to HTML
                console.log("no soup for you")
        }

    })
}

// function question() {
//     inquirer.prompt([

//     ]).then(answer => {
//         // //write manager to HTML
//         // while (choiceAnswer.roleChoice !== "EXIT") {
//         //     //append engeneer to HTML
//         //     if (choiceAnswer.roleChoice === "Engeneer") {
//         //         engeneerPrompts();

//         //     } else if (choiceAnswer.roleChoice === "Intern") {
//         //         //Append Inter to HTML
//         //         internPrompts();

//         //     } else
//         //         //Write the end of the file to HTML
//         //         console.log("no soup for you")
//         // }
//     }).then()
//         .catch((err) => console.error(err))
// }

// array of questions for Manager
const managerPrompts = () => {

    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Manager's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "Employee ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Managers email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Managers office Number?"
        },

    ]).then(managerAnswers => {
        console.table(managerAnswers)
        const employee = new Employee(managerAnswers.employeeName, managerAnswers.employeeId, managerAnswers.employeeEmail);
        //append Manager card to HTML

        console.log(employee)
        console.log(employee.returnName())

        
        employeeChoice()
    })

        .catch((err) => console.error(err));
}

//array of questions for Engeneer
const engeneerPrompts = () => {

    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Engeneerr's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "Employee ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Engeneer's email?"
        },
        {
            type: "input",
            name: "engeneerGithub",
            message: "Engeneer's GitHub?"
        },
    ]).then(engeneerAnswers => {
        console.table(engeneerAnswers)
        const employee = new Employee(engeneerAnswers.employeeName, engeneerAnswers.employeeId, engeneerAnswers.employeeEmail, engeneerAnswers.engeneerGithub);

        console.log(employee)
        console.log(employee.returnName())
        employeeChoice()


    })
        .catch((err) => console.error(err));
}

//array of questions for Intern
const internPrompts = () => {

    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Intern's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "Employee ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Interns's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What School is the Inter attending?"
        },
    ]).then(internAnswers => {
        console.table(internAnswers)
        const employee = new Employee(internAnswers.employeeName, internAnswers.employeeId, internAnswers.employeeEmail, internAnswers.internSchool);

        console.log(employee)
        console.log(employee.returnName())
        employeeChoice()
    })
        .catch((err) => console.error(err));
}

managerPrompts();