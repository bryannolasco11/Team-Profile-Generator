const Manager = require('../lib/Manager.js');

// creates manager object
test('creates a manager object', () => {
    const manager = new Manager('Michael', '13', 'michael@email.com', '1');

    expect(manager.officeNumber).toBe('1');
});

// get 'manager' from getRole()
test("get's employee's role", () => {
    const manager = new Manager('Michael');
    expect(manager.getRole()).toBe('Manager');  //should it be employee.getRole?
});