const Engineer = require('../lib/engineer');

describe("Engineer",()=>{
    test("Testing to make sure github is saved",()=>{
        const NewEmployee = new Engineer("Martin Bedoya", 1234, "martin@me", "josemartin357")
        expect(NewEmployee.getGithub()).toBe("josemartin357")
    })
    test("Testing to make sure role is saved",()=>{
        const NewEmployee = new Engineer("Martin Bedoya", 1234, "martin@me", "josemartin357")
        expect(NewEmployee.getRole()).toBe("Engineer")
    })
})