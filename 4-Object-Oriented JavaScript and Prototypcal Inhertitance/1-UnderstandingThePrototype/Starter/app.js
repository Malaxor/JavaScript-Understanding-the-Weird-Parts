
const person = {

	firstName: 'Default',
	lastName: 'Default',
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
};

const john = {

	firstName: 'John',
	lastName: 'Doe'
};

john.__proto__ = person;
console.log(john.getFullName());

const jane = {

	firstName: 'Jane'
};

jane.__proto__ = person;
console.log(jane.getFullName());