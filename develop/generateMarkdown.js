// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const choices = {
  MIT: {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: '[MIT](https://opensource.org/licenses/MIT)',
  }, 
  Apache: {
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: '[Apache](https://opensource.org/licenses/Apache-2.0)',
  },
}
function renderLicenseBadge(license) {
  // console.log('license: ', license);
  return choices[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return choices[license].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const section = `- ${renderLicenseLink(license)} ${renderLicenseBadge(license)}`;
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  // renderLicenseBadge(data.license);
  return `

# ${data.projectName}

## Description

${data.projectDescription}

## Table of Contents

- [General Information](#general-information)
- [Usage](#usage)
- [Installation](#installation)
- [Instructions for Contributing to this Project](#instructions-for-contributing-to-this-project)
- [Author(s)](#author(s))
- [License](#license)

## General Information

${data.general}

## Usage

${data.usage}

## Installation

${data.installation}

## Instructions for Contributing to this Project

${data.contribute}

## Author

- [${data.name}](${data.github})

## License

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
