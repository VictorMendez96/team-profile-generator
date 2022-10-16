// Import required modules
const inquirer = require('inquirer');
const interruptedPrompt = require('inquirer-interrupted-prompt');
const fs = require('fs');

// Import helper functions in src folder
const generate = require('./src/generateHTML.js');

// Initiate inquirer interrupted prompt for prompts
inquirer.registerPrompt('input', interruptedPrompt);

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
                message: '',
                choices: ['Add a new Manager', 'Add a new Engineer', 'Add a new Intern', 'Done! Make my Page!']
            }
        ])
        .then((menuOption) => {
            if(menuOption.includes('')) {

            } else if (menuOption.includes('')) {

            }else if (menuOption.includes('')) {
                
            } else {
                
            }
        })

};

// Function to add Manager at start of program
function newManager() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: '',
                default: '',
            },
            {
                name: 'id',
                type: 'input',
                message: '',
                default: '',
            },
            {
                name: 'email',
                type: 'input',
                message: '',
                default: '',
            },
            {
                name: 'officeNumber',
                type: 'input',
                message: '',
                default: '',
            },
        ])
        .then((responses) => {

        })
        .catch((error) => {
            if(error === interruptedPrompt.EVENT_INTERRUPTED) {
                console.log('exited to Menu :)');
            }
        })
};

// Calling for the init function to start the program. 
init()