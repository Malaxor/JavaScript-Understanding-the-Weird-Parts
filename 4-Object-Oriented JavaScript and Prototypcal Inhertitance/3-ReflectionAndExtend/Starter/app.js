
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

for(let prop in john) {

	john.hasOwnProperty(prop) && console.log(`${prop}: ${john[prop]}`);	
}

const jane = {

	address: '111 Main St.',
	getFormalFullName() {
		return `${this.lastName}, ${this.firstName}`;
	}
};

const jim = {

	getFirstName() {
		return firstName;
	}
};

_.extend(john, jane, jim);
console.log(john);