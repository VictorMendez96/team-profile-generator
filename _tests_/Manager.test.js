const Manager = require('../lib/Manager')

describe('Manager', () => {
    test('Manager extends Employee class', () => {
        const officeNumber = '1020'
        const employee = new Manager('John', '4890', 'John@test.com', officeNumber)
        expect(employee.officeNumber).toBe(officeNumber)
    })

    test('Can retrieve officeNumber from Manager', () => {
        const officeNumber = '1020'
        const employee = new Manager('John', '4890', 'John@test.com', officeNumber)
        expect(employee.getOfficeNumber()).toBe(officeNumber)
    })

    test('Can retrieve role from Manager', () => {
        const role = 'Manager'
        const employee = new Manager('John', '4890', 'John@test.com')
        expect(employee.getRole()).toBe(role)
    })
})