// A)   1) create html for the general structure
//      2) create html for the manager
//      3) create html for each engineer use map
//      4) create html for each intern use map

// B)   filter out name, id, email, etc in each generate

// C)   1) filter out manager, engineer, intern from array
//      2) map each engineer, and intern
//      3) join them to html

// export that entire page? where does templateData go?

const generateManager = manager => {
    return `
    <div class="card m-3">
    <div class="card-body">
        <div class="card-header bg-warning text-info">
        <h2 class="card-title">${manager.getName()}</h2>
        <h4 class="card-subtitle">${manager.getRole()}</h4>
        <ul class="list-group">
            <li class="list-group-item">Employee Id: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
    </div>
    </div>
    `
};

const generateEngineer = engineer => {
    return `
    <div class="card m-3">
    <div class="card-body">
        <div class="card-header bg-primary text-dark">
        <h2 class="card-title bg-primary text-dark">${engineer.getName()}</h2>
        <h4 class="card-subtitle">${engineer.getRole()}</h4>
        <ul class="list-group">
            <li class="list-group-item">Employee Id: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </div>
    </div>
    </div>
    `
};

const generateIntern = intern => {
    return `
    <div class="card m-3">
    <div class="card-body">
        <div class="card-header bg-info text-dark">
        <h2 class="card-title">${intern.getName()}</h2>
        <h4 class="card-subtitle">${intern.getRole()}</h4>
        <ul class="list-group">
            <li class="list-group-item">Employee Id: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</p>
        </div>
    </div>
    </div>
    `

};

// 1) Need a function to go through array and create a card for each team member
// 2) Then it will join each card into a big array
const employeeCards = employeeArr => {
    let employeeHtml = [];

    employeeHtml.push(employeeArr
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        .join(''));

    employeeHtml.push(employeeArr
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join(''));

    employeeHtml.push(employeeArr
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join(''));
    // use filter to get out each
    // map each
    // join them
    return employeeHtml.join('');
    
}



module.exports =templateData => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
      <title>Team Profile Generator Demo</title>
    </head>
     

      <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 title mb-3 team-heading bg-primary">
                    <h1 class="text-center text-warning">My Team</h1>
                </div>
            </div>
        </div>
            <main class="container">
                <div class="row justify-content-center">
                    <div class="card-deck">
                        ${employeeCards(templateData)}
                    </div>
                </div>
                
            </main>
        
            <footer>
            </footer>
        </body>
        </html>
    `;
}






