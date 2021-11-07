// npm packages are acquired for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Import another JavaScript file for the license section
const licenseSection = require('./generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Please write a short description of your project. E.g., why did you build this project and what problem does it solve?",
    "How do users deploy/install it?",
    "How do users use it?",
    "What license do you choose?",
    "Who are contributors?",
    "What is your Github username?",
    "What is your email?"
];

inquirer
    .prompt(
        [
            {
                type: "title",
                message: questions[0],
                name: "titleName"
            },
            {
                type: "description",
                message: questions[1],
                name: "descriptionName"
            },
            {
                type: "deployment",
                message: questions[2],
                name: "deploymentName"
            }, 
            {
                type: "usage",
                message: questions[3],
                name: "usageName"
            }, 
            {
                type: "license",
                message: questions[4],
                name: "licenseName"
            }, 
            {
                type: "contributor",
                message: questions[5],
                name: "contributorName"
            },
            {
                type: "username",
                message: questions[6],
                name: "usernameName"
            },
            {
                type: "email",
                message: questions[7],
                name: "emailName"
            }
        ]
    ).then((answers) => {
        writeToFile("README", answers)
    });

// Create a function to write a README file
function writeToFile(fileName, data) {
    let userReport = "";
    userReport += `# ${data.titleName}\n\n`;
    userReport += `## Table of Contents\n\n`;
    userReport += `- [Description](#description)\n`;
    userReport += `- [Installation](#installation)\n`;
    userReport += `- [Usage](#usage)\n`;
    userReport += `- [License](#license)\n`;
    userReport += `- [Contributing](#contributing)\n`;
    userReport += `- [Questions](#questions)\n\n`;
    userReport += `## Description\n\n`;
    userReport += `${data.descriptionName}\n\n`;
    userReport += `## Installation\n\n`;
    userReport += `${data.deploymentName}\n\n`;
    userReport += `## Usage\n\n`;
    userReport += `${data.usageName}\n\n`;
    userReport += `## License\n\n`;
    userReport += `${licenseSection(data)}\n\n`;
    userReport += `## Contributing\n\n`;
    userReport += `${data.contributorName}\n\n`;
    userReport += `## Questions\n\n`;
    userReport += `For questions, please email me at [${data.emailName}](mailto:${data.emailName}).`;
    fs.writeFile(`${fileName}.md`, userReport, (err) =>
    err ? console.log(error) : console.log("A readme file is successfully generated!"))
}

// Create a function to initialize the app and call it
function init() {}
init();
