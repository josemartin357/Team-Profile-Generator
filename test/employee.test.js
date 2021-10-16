const Employee = require("../lib/employee");

describe("Employee",()=>{
    test("Testing to make sure name is being saved",()=>{
        const NewEmployee = new Employee("Martin Bedoya", 1234, "martin@me")
        expect(NewEmployee.getName()).toBe("Martin Bedoya")
    })
    test("Testing to make sure ID is being saved",()=>{
        const NewEmployee = new Employee("Martin Bedoya", 1234, "martin@me")
        expect(NewEmployee.getId()).toBe(1234)
    })
    test("Testing to make sure email is being saved",()=>{
        const NewEmployee = new Employee("Martin Bedoya", 1234, "martin@me")
        expect(NewEmployee.getEmail()).toBe("martin@me")
    })
    test("Testing to make sure role is being saved",()=>{
        const NewEmployee = new Employee("Martin Bedoya", 1234, "martin@me")
        expect(NewEmployee.getRole()).toBe("Employee")
    })
})