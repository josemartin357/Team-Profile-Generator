
const inquirer = require('inquirer');

// requiring classes for these roles
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
teamMembers = [];


const startQuestions = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What\'s the manager\'s name?',
        },
        {
            type:'input',
            name:'id',
            message:'What\s the manager\'s employee id?',
        },
        {
            type:'input',
            name:'email',
            message:'What\s the manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message:'What\s the manager\'s office number?',
        },
        {
            type: 'list',
            name: 'otherMembers',
            message: 'Do you want to add an engineer or an intern?',
            choices: ['Engineer', 'Intern', 'None'],
        }
    ])
    .then((managerProfile) => {
        const manager = new Manager(managerProfile.name, managerProfile.id, managerProfile.email, managerProfile.officeNumber);
        switch(managerProfile.otherMembers){
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'None':
                return '';
                break;
        }
        // console.log(managerProfile);
    })
}


// Adding qustions for engineer switch
const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What\'s the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message:'What\'s the engineer\'s employee id number?',
        },
        {
            type: 'input',
            name: 'email',
            message:'What\'s the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'github',
            message:'What\'s the engineer\'s Github account?',
        },
        {
            type: 'list',
            name: 'otherMembers',
            message: 'Do you want to add an engineer or an intern?',
            choices: ['Engineer', 'Intern', 'None'],
        }
    ])
    .then((engineerProfile) => {
        const engineer = new Engineer(engineerProfile.id, engineerProfile.name, engineerProfile.email, engineerProfile.github)
        switch(engineerProfile.otherMembers) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'None':
                return '';
                break;
        }
    })
};

// adding questions for intern switch
const internPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What\'s the intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message:'What\'s the intern\'s id number?',
        },
        {
            type: 'input',
            name: 'email',
            message:'What\'s the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'school',
            message:'What school does the intern attend?',
        },
        {
            type: 'list',
            name: 'otherMembers',
            message: 'Do you want to add an engineer or an intern?',
            choices: ['Engineer', 'Intern', 'None'],
        }
    ])
    .then((internProfile) => {
        const intern = new Intern(internProfile.id, internProfile.name, internProfile.email, internProfile.school)
        switch(internProfile.otherMembers){
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            default:
        }
    })
}

startQuestions();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
