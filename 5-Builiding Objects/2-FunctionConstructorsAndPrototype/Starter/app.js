function Person(firstname, lastname) {
 
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.getFullName = function() {

	return `${this.firstname} ${this.lastname}`
};

const jane = new Person('Jane', 'Doe');
console.log(jane);