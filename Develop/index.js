const inquirer = require('inquirer');

const generateMarkdowm = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(`
    =============================
    Professional README Generator
    =============================
    `)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your README?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your README!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('A description of your project is required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a description of how to install/operate your project (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('A description of your installation process is required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a description of how your project can be used by others (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('A description of how to implement your project by others is required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide a description of any contributors to your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("No 'Contribution' section will be created.");
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide an example of your project in action.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('An email address is required!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('A GitHub link to your project is required!');
                    return false;
                }
            }
        },
    ])
};

// Function call to initialize app
init();
