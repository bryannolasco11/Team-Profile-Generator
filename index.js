
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');

const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require('./src/page-template.js');
const {writeFile} = require('./utils/generate-site.js');

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
            
            const { name, id, email, role, officeNumber } = managerData;
            const manager = new Manager (name, id, email, officeNumber);

            console.log(manager);
            teamArray.push(manager);
            verifyAddToTeam();
        })
};
//questions for the engineer
const engineerQuestions = () => {
    inquirer
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
    .then(engineerData => {
        const { name, id, email, role, github } = engineerData;
        const engineer = new Engineer (name, id, email, github);

            console.log(engineer);
            teamArray.push(engineer);
            verifyAddToTeam();
    })
};

const internQuestions = () => {
    inquirer
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
    .then(internData => {
        const { name, id, email, role,  school } = internData;
        const intern = new Intern (name, id, email, school);

            console.log(intern);
            teamArray.push(intern);
            verifyAddToTeam();
    })
};

function verifyAddToTeam () {
    inquirer
        .prompt ([
            {
               type: 'list',
               name: 'role',
               message: 'Would you like to add a member to your team?  Choose what type.  If not, choose "Done".',
               choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        .then((answer)=>{
            console.log(answer.role);
            if (answer.role === 'Engineer') {
                engineerQuestions();
            } else if (answer.role === 'Intern') {
                internQuestions();
            } else {
               return fs.writeFile("./dist/index.html", generatePage(teamArray), function(err){
                   if(err){
                       console.log("ERROR")
                   } else {
                       console.log("Index generated!")
                   }
               })
               
            }
        })
}

managerQuestions()
   
   