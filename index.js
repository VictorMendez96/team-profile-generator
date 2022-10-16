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
inquirer.registerPrompt('input', interruptedPrompt);

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
                name: 'menu',
                type: 'list',
                message: 'Create your team profile! Choose an option:',
                choices: ['Add a new Manager', 'Add a new Engineer', 'Add a new Intern', 'Done! Make my new team profile!']
            }
        ])
        .then((menuOption) => {
            if(menuOption.includes('Add a new Manager')) {
                newManager()
            } else if (menuOption.includes('Add a new Engineer')) {
                newEmployee()
            }else if (menuOption.includes('Add a new Intern')) {
                newEmployee()
            } else {
                generateHTML(team)
            }
        })

};

// Function to add a new Manager to the team
function newManager() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: '',
                default: ''
            },
            {
                name: 'id',
                type: 'input',
                message: '',
                default: ''
            },
            {
                name: 'email',
                type: 'input',
                message: '',
                default: ''
            },
            {
                name: 'officeNumber',
                type: 'input',
                message: '',
                default: ''
            },
        ])
        .then((responses) => {
            menu()
        })
        .catch((error) => {
            if(error === interruptedPrompt.EVENT_INTERRUPTED) {
                console.log('Exited to Menu :)');
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
                message: '',
                default: ''
            },
            {
                name: 'id',
                type: 'input',
                message: '',
                default: ''
            },
            {
                name: 'email',
                type: 'input',
                message: '',
                default: ''
            },
            {
                name: 'role',
                type: 'input',
                message: '',
                default: ''
            },
        ])
        .then(function ({name, id, email, role}) {
            if (role === 'engineer') {
                menu()
            } else {
                menu()
            }
        })
        .catch((error) => {
            if(error === interruptedPrompt.EVENT_INTERRUPTED) {
                console.log('Exited to Menu :)');
            }
        })
};

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Profile Created!'))
};

function generateHTML() {
    let profile = generate(team);
    writeToFile('./dist/index.html', profile);
}

// Calling for the init function to start the program. 
init()