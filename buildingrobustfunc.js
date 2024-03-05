function getPerson(person) {
    try {
        
        if (typeof person !== 'object' || !person.hasOwnProperty('name') || !person.hasOwnProperty('age')) {
            throw new Error("Invalid parameter type");
        }

        const { name, age } = person;

        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}

// Example usage:
const validPerson = { name: "John", age: 30 };
const invalidPerson = "not an object";

console.log(getPerson(validPerson)); // Output: Name: John, Age: 30
console.log(getPerson(invalidPerson)); // Output: Invalid parameter type