class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

const employee = new Employee("John Doe", "Software Engineer", 60000);

// Call the getSalary method
console.log(employee.getSalary()); // Output: 60000