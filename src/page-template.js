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
    <div>
        <h3> 
            ${manager.getName()}
        </h3>
        <h4>${manager.getRole()}</h4>
        <p>Employee Id: ${manager.getId()}</p>
        <p>Email: ${manager.getEmail()}</p>
        <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
    `
};

const generateEngineer = engineer => {
    return `
    <div>
        <h3> 
            ${engineer.getName()}
        </h3>
        <h4>${engineer.getRole()}</h4>
        <p>Employee Id: ${engineer.getId()}</p>
        <p>Email: ${engineer.getEmail()}</p>
        <p>Github: ${engineer.getGithub()}</p>
    </div>
    `
};

const generateIntern = intern => {
    return `
    <div>
        <h3> 
            ${intern.getName()}
        </h3>
        <h4>${intern.getRole()}</h4>
        <p>Employee Id: ${intern.getId()}</p>
        <p>Email: ${intern.getEmail()}</p>
        <p>School: ${intern.getSchool()}</p>
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
      <title>Team Profile Generator Demo</title>
    </head>
     

      <body>
            <header>

            </header>

            <main>
                ${employeeCards(templateData)}
            </main>
            <footer>
            </footer>
        </body>
        </html>
    `;
}






