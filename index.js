// npm packages are acquired for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Please write a short description of your project. E.g., why did you build this project and what problem does it solve?",
    "How do we deploy/install it?",
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
                type: "contributor",
                message: questions[3],
                name: "contributorName"
            },
            {
                type: "username",
                message: questions[4],
                name: "usernameName"
            },
            {
                type: "email",
                message: questions[5],
                name: "emailName"
            }
        ]
    ).then((answers) => {
        writeToFile("README", answers)
    });

// Create a function to write a README file
function writeToFile(fileName, data) {
    let userReport = 
    `# ${data.titleName}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)        
    ## Description        
    ${data.descriptionName}        
    ## Installation         
    ${data.deploymentName}   
    ## Usage
    ## License      
    ## Contributing     
    ## Tests   
    ## Questions
    For questions, please email me at [${data.emailName}](${data.emailName}).`;
    fs.writeFile(`${fileName}.md`, userReport, (err) =>
    err ? console.log(error) : console.log("A readme file is successfully generated!"))
}

// Create a function to initialize app
function init() {}

// Call the above function to initialize app
init();
