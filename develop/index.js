// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// File system interaction
const fs = require('fs');
// Path
const path = require('path');
// Reference to generate.js
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the author?'
    }, {
        type: 'input',
        name: 'github',
        message: 'What is the github url for the author?'
    }, {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project (it should match the name on the repository)?'
    }, {
        type: 'input',
        name: 'projectDescription',
        message: 'In one or two sentences, please provide a brief description of the project to go below the title.'
    }, {
        type: 'input',
        name: 'general',
        message: 'Please provide a detailed explanation of the project and/or its requirements.'
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
        name: 'contribute',
        message: 'Please provide guidelines for contributing to this project.'
    }, {
        type: 'input',
        name: 'questions',
        message: 'Please provide an email for users to send inquiries to.'
    }, {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: [
            'MIT',
            'Apache',
            'BSD',
            'Mozilla',
            'None'
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
        console.log('inquiry response: ', responses);
        writeToFile('generatedREADME.md', generateMarkdown({...responses}));
    })

}

// Function call to initialize app
init();