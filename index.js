// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What would you like to title your README?',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'How do you install this project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Describe your project.',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What is the intended use of this project?',
    },
    {
        name: 'credits',
        type: 'input',
        message: 'Take a moment to Credit the authors or document sites used for this project.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'What licenses were used for this project?',
        choices: ['ISC', 'MIT', 'Apache-2.0'],
    },
];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = data.title
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => writeToFile(data))
}

// Function call to initialize app
init();
