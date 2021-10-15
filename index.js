
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

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
        teamMembers.push(manager);
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
        writeToFile('index.html', generateHTML(teamMembers))
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
        const engineer = new Engineer(engineerProfile.name, engineerProfile.id, engineerProfile.email, engineerProfile.github);
        teamMembers.push(engineer);
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
        writeToFile('index.html', generateHTML(teamMembers))
        }
    // console.log(engineerProfile);
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
        const intern = new Intern(internProfile.name, internProfile.id, internProfile.email, internProfile.school);
        teamMembers.push(intern);
        switch(internProfile.otherMembers){
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            default:
        writeToFile('index.html', generateHTML(teamMembers))
        }
    // console.log(internProfile);
    })
}

startQuestions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Success!')
    });
};
