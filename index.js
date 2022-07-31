const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');

const inquirer = require("inquirer");
const fs = require("fs");

// empty array for different team members
const teamArray = [];


//questions for the manager
const managerQuestions = () => {
    return inquirer
        .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Hello manager boss, what is your name?'
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the number on your office door?"
        }])
        .then(managerData => {
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager (name, id, email, officeNumber);

            console.log(manager);
        })
};
//questions for the engineer
const engineerQuestions = () => {
    return inquirer
        .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?" 
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?"
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's e-mail?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is engineer's Github name?"
        }
    ])
};

const internQuestions = () => {
    return inquirer
        .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the student's name?"
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?"
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the intern's e-mail?"
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?'
        }
    ])
}


// const employeeQuestions = () => {
//     console.log("A boss manager such as yourself should have some employees");
    
//     return inquirer
//         .prompt (
//             {
//                 type: '',
//                 name: 'role',
//                 message: 'Would you like to add another employee.  If so, what type?',
//                 choices: ['Engineer', 'Intern', 'none']
//             }
        
//         )
// }



managerQuestions()
    // .then((data=>{
    //     console.log(data);
    // }))