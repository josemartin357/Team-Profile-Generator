const Intern = require('../lib/intern');

describe("Intern",()=>{
    test("Testing to make sure school number is saved",()=>{
        const NewEmployee = new Intern("Martin Bedoya", 1234, "martin@me", "SMU")
        expect(NewEmployee.getSchool()).toBe("SMU")
    })
    test("Testing to make sure role is saved",()=>{
        const NewEmployee = new Intern("Martin Bedoya", 1234, "martin@me", "SMU")
        expect(NewEmployee.getRole()).toBe("Intern")
    })
})