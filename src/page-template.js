// A)   1) create html for the general structure
//      2) create html for the manager
//      3) create html for each engineer use map
//      4) create html for each intern use map

// B)   filter out name, id, email, etc in each generate

// C)   1) filter out manager, engineer, intern from array
//      2) map each engineer, and intern
//      3) join them to html

// export that entire page? where does templateData go?

const generateManager = managerText => {
    return `
    <div>
        <h3> 
            ${Manager.name}
        </h3>
    `
};

const generateEngineer = engingeerText => {

};

const generateIntern = internText => {


};

// 1) Need a function to go through array and create a card for each team member
// 2) Then it will join each card into a big array
const employeeCards = employeeArr => {
    let employeeHtml = [];
    // use filter to get out each
    // map each
    // join them

}



module.exports = templateData => {
    const { }= templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator Demo</title>

      <link rel="stylesheet" href="style.css">

      <body>
            <header>

            </header>

            <main>

            </main>
            <footer>
            </footer>
        </body>
        </html>
    `;
}






