// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What would you like to title your README?',
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
        type: 'input',
        message: 'What licenses were used for this project?',
    },
];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = questions.title;
    inquirer
    .prompt([{questions}])
    .then((data) => 
    fs.writeFile(`${fileName}.md`, JSON.stringify(data , null, '\t'), (err) =>
        err ? console.error(err) : console.log('Success!')
      )
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
