
// classes for these roles
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

// function to make div with required info
function makeCard(teamMembers) {
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


// Here we generate HTML and grab data from MakeCard
function generateHTML(teamMembers) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>My Work Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-dark">
  <div class="container-fluid">
    <h1 class="text-center display-4">My Amazing Team</h1>
  </div>
</div>
<div class="d-flex flex-row justify-content-center">
${makeCard(teamMembers)}
</div>
</body>
</html>
    `
}

// here we define role info that will display in html portion
// Manager info portion to get name, role, id, email and office number
let pullManagerInfo = (Manager) => {
  return `
  <div class="card m-1" style="width: 20rem">
    <div class='card-header'>
      <h3 class="card-title">${Manager.getName()}</h3>
      <h6 class="card-text">${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">Email: ${Manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

// Engineer info portion to get name, role, id, email and github
let pullEngineerInfo = (Engineer) => {
  return `
  <div class="card m-1" style="width: 20rem">
    <div class='card-header'>
      <h3 class="card-title">${Engineer.getName()}</h3>
      <h6 class="card-text">${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  `
};

// Intern info portion to get name, role, id, email and school
let pullInternInfo = (Intern) => {
  return `
  <div class="card m-1" style="width: 20rem">
    <div class='card-header'>
      <h3 class="card-title">${Intern.getName()}</h3>
      <h6 class="card-text">${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: ${Intern.getEmail()}</li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

// exporting module to generateHTML
module.exports = generateHTML;