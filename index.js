// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information: '
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions: '
    },
    {
        type: 'list',
        message: 'Choose one of the following licenses: ',
        name: 'license',
        choices: ['IBM', 'MIT', 'Mozilla', 'Apache']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for future contact: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        writeToFile('./output/README.md', data)
    })
};

// Function call to initialize app
init();
