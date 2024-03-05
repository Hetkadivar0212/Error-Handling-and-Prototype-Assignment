class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}


const myCar = new Car("BMW", "X7", 2023);

// Call the getDescription method
console.log(myCar.getDescription()); // Output: This is a 2023 BMW X7