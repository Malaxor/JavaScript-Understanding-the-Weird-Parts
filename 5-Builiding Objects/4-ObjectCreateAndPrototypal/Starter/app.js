
const person = {

    firstName: 'Default',
    lastName: 'Default',
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
};

const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';
console.log(john);