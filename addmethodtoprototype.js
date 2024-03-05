const Student = {
    name: "Mithun",

    printDetails: function() {
        console.log(`Hello, the student is ${this.name}`);
    }
};

const mithun = Object.create(Student);
mithun.name = "Mithun";

mithun.printDetails(); // Output: "Hello, the student is Mithun"