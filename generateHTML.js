
// classes for these roles
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

// function to make div with required info
function makeCard() {
    // switch statement to jump between roles
    switch(teamList.getRole()) {
      case 'Manager':
        const manager = new Manager(teamList.name, teamList.id, teamList.email, teamList.officeNumber);
        // pushing info to pullManagerInfo
        memberInfo.push(pullManagerInfo(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(teamList.name, teamList.id, teamList.email, teamList.github);
        // pushing info to pullEngineerInfo
        memberInfo.push(pullEngineerInfo(engineer));
        break;
      case 'Intern':
        const intern = new Intern(teamList.name, teamList.id, teamList.email, teamList.school);
        // pushing info to pullInternInfo
        memberInfo.push(pullInternInfo(intern));
        break;
    }
  }

// exporting module to generateHTML
module.exports = generateHTML;
