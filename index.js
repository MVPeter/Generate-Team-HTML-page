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

const managerHTML = answers =>
`
<!doctype html>
<html lang="en">

<head>
    <title>Engeneering Team</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <div class="jumbotron jumbotron-fluid mb-0">
        <div class="container">
            <h1 class="display-3">Engineering Team</h1>
            <hr class="my-2">
        </div>
    </div>
    <div class="container-fluid bg-secondary mt-2">
        <div id="cards" class="card-columns">
            <div id="manager" class="card">
                <div class="card-body bg-light">
                    <div class="card-header bg-info">
                        <h4 class="card-title">Name: ${managerAnswers.employeeName}</h4>
                        <h5 class="card-text">Manager </h5>
                    </div>
                    <div>
                        <p class="card-text">ID: ${managerAnswers.employeeId}</p>
                        <p class="card-text">EMail: ${managerAnswers.employeeEmail}</p>
                        <p class="card-text">Office Number: ${managerAnswers.managerOffice}</p>
                    </div>
                </div>
            </div>
`;

const engineerHTML = (answers) =>
`
<div id="engineer" class="card">
<div class="card-body bg-light">
    <div class="card-header bg-info">
        <h4 class="card-title">Name: ${engeneerAnswers.employeeName}</h4>
        <h5 class="card-text">Engeneer </h5>
    </div>
    <div>
        <p class="card-text">ID: ${engeneerAnswers.employeeId}</p>
        <p class="card-text">EMail: ${engeneerAnswers.employeeEmail}</p>
        <p class="card-text">GitHub: ${engeneerAnswers.engeneerGithub}</p>
    </div>
</div>
</div>
`

const internHTML = (answers) =>
`
<div id="intern" class="card">
<div class="card-body bg-light">
    <div class="card-header bg-info">
        <h4 class="card-title">Name:${internAnswers.employeeName}</h4>
        <h5 class="card-text">Title Intern</h5>
    </div>
    <div>
        <p class="card-text">ID: ${internAnswers.employeeId}</p>
        <p class="card-text">EMail: ${internAnswers.employeeEmail}</p>
        <p class="card-text">School: ${internAnswers.internSchool}</p>
    </div>
</div>
</div>
`

const doneHTML = (answers) =>
`
</div>

</div>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>

</html>
`

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
        const employee = new Employee(managerAnswers.employeeName, managerAnswers.employeeId, managerAnswers.employeeEmail, managerAnswers.managerOffice);
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