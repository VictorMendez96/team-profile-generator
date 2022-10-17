const Employee = require('../lib/Employee');

describe('Employee', () => {
    test('Employee Creation', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object') 
    });

    test('Can set name', () => {
        const name = 'John';
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    })

    test('Can set id', () => {
        const id = '4890';
        const employee = new Employee('John', id);
        expect(employee.id).toBe(id);
    })

    test('Can set email', () => {
        const email = 'John@test.com';
        const employee = new Employee('John', '4890', email);
        expect(employee.email).toBe(email);
    })

    test('Can retrieve role', () => {
        const role = 'Employee';
        const employee = new Employee('John', '4890', 'John@test.com');
        expect(employee.getRole()).toBe(role);
    })

    test('Can retrieve name', () => {
        const name = 'John';
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    })

    test('Can retrieve id', () => {
        const id = '4890';
        const employee = new Employee('John', id);
        expect(employee.getId()).toBe(id);
    })

    test('Can retrieve email', () => {
        const email = 'John@test.com';
        const employee = new Employee('John', '4890', email);
        expect(employee.getEmail()).toBe(email);
    })
});