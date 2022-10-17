const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    test('Engineer extends Employee class', () => {
        const github = 'testgithub'
        const employee = new Engineer('John', '4890', 'John@test.com', github)
        expect(employee.github).toBe(github)
    })

    test('Can retrieve github from Engineer', () => {
        const github = 'testgithub'
        const employee = new Engineer('John', '4890', 'John@test.com', github)
        expect(employee.getGithub()).toBe(github)
    })

    test('Can retrieve role from Engineer', () => {
        const role = 'Engineer'
        const employee = new Engineer('John', '4890', 'John@test.com')
        expect(employee.getRole()).toBe(role)
    })
})