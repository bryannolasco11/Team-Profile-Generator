const Engineer = require('../lib/Engineer.js');

// creates Engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Edison', '29', 'edison@email.com', 'edisonLightbulb');

    expect(engineer.github).toBe('edisonLightbulb');
});

// get github from getGithub()
test("get's employee's gitHub", () => {
    const engineer = new Engineer('Edison', '29', 'edison@email.com', 'edisonLightbulb');

    expect(engineer.getGithub()).toBe(engineer.github);
});

// gets 'Engineer' from getRole()
test("get's employee's role", () => {
    const engineer = new Engineer('Edison', '29', 'edison@email.com', 'edisonLightbulb');
    
    expect(engineer.getRole()).toBe('Employee'); //should it be employee.getRole?
});