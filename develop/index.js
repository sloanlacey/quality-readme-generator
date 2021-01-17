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
        name: 'project name',
        message: 'What is the name of this project?'
    }, {
        type: 'input',
        name: 'project description',
        message: 'Please describe the project.'
    }, {
        type: 'input',
        name: 'installation',
        message: 'How can a user install this application?'
    }, {
        type: 'input',
        name: 'usage',
        message: 'How can this application used?'
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
        name: 'installation',
        message: 'How can a user install this application?'
    }, {
        type: 'input',
        name: 'license',
        message: 'How is this project licensed?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();