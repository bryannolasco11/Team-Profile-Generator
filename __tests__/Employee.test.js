const Employee = require('../lib/Employee.js')

// creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Bryan', '11', 'value@email.com');

    expect(employee.name).toBe('Bryan');
    expect(employee.id).toBe('11');
    expect(employee.email).toBe('value@email.com');
});

// gets name from getName()
test("get's employee's name", () => {
    const employee = new Employee('Bryan');

    expect(employee.getName()).toBe(employee.name);
});

// gets ID from getID()
test("get's employee's ID", () => {
    const employee = new Employee('Bryan');
    expect(employee.getId()).toBe(employee.id);
});

//gets email from getEmail()
test("get's employee's email", () => {
    const employee = new Employee('Bryan');
    expect(employee.getEmail()).toBe(employee.email);
});

// gets 'Employee' from getRole()
test("get's employee's role", () => {
    const employee = new Employee('Bryan');
    expect(employee.getRole()).toBe('Employee');
});
