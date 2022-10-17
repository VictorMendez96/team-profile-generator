const Intern = require('../lib/Intern')

describe('Intern', () => {
    test('Intern extends Employee class', () => {
        const school = 'Denver University'
        const employee = new Intern('John', '4890', 'John@test.com', school)
        expect(employee.school).toBe(school)
    })

    test('Can retrieve school from Intern', () => {
        const school = 'Denver University'
        const employee = new Intern('John', '4890', 'John@test.com', school)
        expect(employee.getSchool()).toBe(school)
    })

    test('Can retrieve role from Intern', () => {
        const role = 'Intern'
        const employee = new Intern('John', '4890', 'John@test.com')
        expect(employee.getRole()).toBe(role)
    })
})