const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('Bryan', '11', 'value@email.com');

    expect(employee.name).toBe('Bryan');
    expect(employee.id).toBe('11');
    expect(employee.email).toBe('value@email.com');
});