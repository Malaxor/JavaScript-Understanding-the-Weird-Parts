
const person = {

    firstName: 'Default',
    lastName: 'Default',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

const john = {

    firstName: 'John',
    lastName: 'Doe'
};
// jon now inherits all of person's properties/methods
// the prototype object will not override other object's identically named properties (prototype chain)
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName);
console.log('-------------------');

const jane = {

    firstName: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFullName());
console.log(jane.lastName);