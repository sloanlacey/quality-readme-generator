// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// File system interaction
const fs = require('fs');
// Path
const path = require('path');
// Reference to generate.js
const generate = require('./generate');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }, {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project?'
    }, {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of the project.'
    }, {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for this application.'
    }, {
        type: 'input',
        name: 'installation',
        message: 'How can a user install this application?'
    }, {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to this project?'
    }, {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing to this project.'
    }, {
        type: 'input',
        name: 'license',
        message: 'How is this project licensed?',
        choices: [
            'MIT',
            'Apache',
            'Mozilla Public License',
            'Amazon',
            'Microsoft'
        ],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log('Excellent! Your new README.md file has been generated.')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log(responses);
        writeToFile('README.md', generate({...responses}));
    })

}

// Function call to initialize app
init();