// Import required modules
const inquirer = require('inquirer');
const interruptedPrompt = require('inquirer-interrupted-prompt');
const fs = require('fs');

// Import helper functions in src folder
const generate = require('./src/generateHTML.js');

// Initiate inquirer interrupted prompt for prompts
interruptedPrompt.fromAll(inquirer);

// Function for app initiation 
function init() {

};

// Function to add Manager at start of program
function newManager() {
    inquirer
        .prompt([
            {
                name: '',
                type: 'input',
                message: '',
                default: ''
                
            };
        ]);
};

// Calling for the init function to start the program. 
init()