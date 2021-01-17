// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// File system interaction
const fs = require('fs');
// Path
const path = require('path');
// Reference to generate.js
// const generate = require('./utils/generate');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }, {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();