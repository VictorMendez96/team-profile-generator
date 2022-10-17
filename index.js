// Import required modules
const inquirer = require('inquirer');
const interruptedPrompt = require('inquirer-interrupted-prompt');
const fs = require('fs');

// Import helper functions in src folder
const generate = require('./src/generateHTML.js');

// Import classes from lib folder
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Initiate inquirer interrupted prompt for prompts
// inquirer.registerPrompt('input', interruptedPrompt);

// Declare variables
const team = [];

// Function for app initiation 
function init() {
    menu();
};

// Function for menu
function menu() {
    inquirer
        .prompt([
            {
                name: 'menuOption',
                type: 'list',
                message: 'Create your team profile! Choose an option:',
                choices: ['Add a new Manager', 'Add a new Engineer', 'Add a new Intern', 'Done! Make my new team profile!']
            }
        ])
        .then(function({ menuOption }) {
            // console.log(menuOption)
            if(menuOption.includes('Done! Make my new team profile!')) {
                generateHTML(team)
            } else {
                newEmployee()
            }
        })

};

// Function to add a new Engineer to the team
function newEmployee() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of the new employee: ',
                default: 'John Smith'
            },
            {
                name: 'id',
                type: 'input',
                message: 'Enter their new ID number: ',
                default: '1234'
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter their email: ',
                default: 'someone@example.com'
            },
            {
                name: 'role',
                type: 'input',
                message: 'Enter their role on the team: ',
                default: 'manager, engineer, or intern?'
            },
        ])
        .then(function ({name, id, email, role}) {
            if (role === 'manager') {
                inquirer
                    .prompt([
                        {
                            name: 'officeNumber',
                            type: 'input',
                            message: 'Enter their new office number: ',
                            default: ''
                        }
                    ])
                    .then(function ({ officeNumber }) {
                        employee = new Manager(name, id, email, officeNumber);
                        team.push(employee);
                        menu();
                    })
            } else if (role === 'engineer'){
                inquirer
                    .prompt([
                        {
                            name: 'github',
                            type: 'input',
                            message: 'Enter their GitHub: ',
                            default: 'VictorMendez96'
                        }
                    ])
                    .then(function ({ github }) {
                        employee = new Engineer(name, id, email, github);
                        team.push(employee);
                        menu();
                    })
            } else {
                inquirer
                    .prompt([
                        {
                            name: 'school',
                            type: 'input',
                            message: 'Enter the school they are/were attending: ',
                            default: 'Denver University'
                        }
                    ])
                    .then(function ({ school }) {
                        employee = new Intern(name, id, email, school);
                        team.push(employee);
                        menu();
                    })
            }
        })
        .catch((error) => {
            console.log(error);
        })
};

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Your Team Profile is ready to view!'))
};

function generateHTML() {
    let profile = generate(team);
    writeToFile('./dist/index.html', profile);
}

// Calling for the init function to start the program. 
init()