//required modules
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

//file name and location of output.
const filePath = "./dist/index.html";

//Begin HTML and Manager Card.
const managerHTML = (manager) =>
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

<body class= "bg-secondary">
    <div class="jumbotron jumbotron-fluid mb-0">
        <div class="container">
            <h1 class="display-3">${manager.name}'s Engineering Team</h1>
            <hr class="my-2">
        </div>
    </div>
    <div class="container-fluid bg-secondary mt-2 mb-2">
        <div id="cards" class="card-columns">
            <div id="manager" class="card">
                <div class="card-body bg-light">
                    <div class="card-header bg-info">
                        <h4 class="card-title">Name: ${manager.name}</h4>
                        <h5 class="card-text">${manager.role} </h5>
                    </div>
                    <div>
                        <p class="card-text">ID: ${manager.id}</p>
                        <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="card-text">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
            
`;

//Engineer Cards.
const engineerHTML = (engineer) =>
`
            <div id="engineer" class="card">
            <div class="card-body bg-light">
                <div class="card-header bg-info">
                    <h4 class="card-title">Name: ${engineer.name}</h4>
                    <h5 class="card-text">${engineer.role}</h5>
                </div>
                <div>
                    <p class="card-text">ID: ${engineer.id}</p>
                    <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="card-text">GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank">GitHub Profile</a></p>
                </div>
            </div>
            </div>

`;

//Inter cards
const internHTML = (intern) =>
`
            <div id="intern" class="card">
            <div class="card-body bg-light">
                <div class="card-header bg-info">
                    <h4 class="card-title">Name: ${intern.name}</h4>
                    <h5 class="card-text">${intern.role}</h5>
                </div>
                <div>
                    <p class="card-text">ID: ${intern.id}</p>
                    <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="card-text">School: ${intern.school}</p>
                </div>
            </div>
            </div>

`;

//End of HTML file
const doneHTML = () =>
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

`;


// function to list the card choices and allow Exit.
const employeeChoice = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "roleChoice",
            message: "Do you want add one of the following or exit? ",
            choices: ["Engineer", "Intern", "EXIT"]
        }
    ]).then(choiceAnswer => {
        console.table(choiceAnswer)
        //write Exit to HTML
        if (choiceAnswer.roleChoice === "EXIT") {
            fs.appendFile(filePath, doneHTML(), function (err, result) {
                if (err) console.log('error', err)
            });
        }
        //append engineer to HTML
        if (choiceAnswer.roleChoice === "Engineer") {
            engineerPrompts();

        }
        if (choiceAnswer.roleChoice === "Intern") {
            //Append Inter to HTML
            internPrompts();
        }
    })
};

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
        const manager = new Manager(managerAnswers.employeeName, managerAnswers.employeeId, managerAnswers.employeeEmail, managerAnswers.managerOffice);
        manager.role = manager.getRole()
        // console.log(manager);
        // console.log(manager.getManager());
        // console.log(role);
        
        //write Manager card to HTML
        fs.writeFile(filePath, managerHTML(manager), function (err, result) {
            if (err) console.log('error', err);
        });
        employeeChoice()
    })
        .catch((err) => console.error(err));
}

//array of questions for Engineer
const engineerPrompts = () => {

    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Engineerr's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "Employee ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Engineer's GitHub Username?"
        },
    ]).then(engineerAnswers => {
        console.table(engineerAnswers)
        const engineer = new Engineer(engineerAnswers.employeeName, engineerAnswers.employeeId, engineerAnswers.employeeEmail, engineerAnswers.engineerGithub);
        engineer.role = engineer.getRole()
        // console.log(engineer)
        // console.log(engineer.getEngineer())

        //write enginer to Html
        fs.appendFile(filePath, engineerHTML(engineer), function (err, result) {
            if (err) console.log('error', err);
        });
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
        const intern = new Intern(internAnswers.employeeName, internAnswers.employeeId, internAnswers.employeeEmail, internAnswers.internSchool);
        intern.role = intern.getRole()
        // console.log(intern)
        // console.log(intern.getIntern())
        fs.appendFile(filePath, internHTML(intern), function (err, result) {
            if (err) console.log('error', err);
        });
        employeeChoice()
    })
        .catch((err) => console.error(err));
}

managerPrompts();