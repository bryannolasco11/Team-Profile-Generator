const Intern = require ('../lib/Intern.js');

// creates Intern object
test('creates an Intern object', () => {
    const intern = new Intern('Chris', '24', 'chris@email.com', 'Marquette');
    
    expect(intern.school).toBe('Marquette');
});

//get school from getSchool()
test("get's employee's school", () => {
    const intern = new Intern('Chris', '24', 'chris@email.com', 'Marquette');

    expect(intern.getSchool()).toBe(intern.school);
});

// gets 'Intern' from getRole()
test("get's employee's role", () => {
    const intern = new Intern('Edison', '29', 'edison@email.com', 'edisonLightbulb');
    
    expect(intern.getRole()).toBe('Intern'); //should it be employee.getRole?
});