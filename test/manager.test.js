const Manager = require('../lib/manager');

describe("Manager",()=>{
    test("Testing to make sure office number is saved",()=>{
        const NewEmployee = new Manager("Martin Bedoya", 1234, "martin@me", 345)
        expect(NewEmployee.getOfficeNumber()).toBe(345)
    })
    test("Testing to make sure role is saved",()=>{
        const NewEmployee = new Manager("Martin Bedoya", 1234, "martin@me", 345)
        expect(NewEmployee.getRole()).toBe("Manager")
    })
})