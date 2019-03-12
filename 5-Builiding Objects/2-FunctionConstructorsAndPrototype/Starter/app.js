function Person(firstname, lastname) {
 
	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
	console.log('This function is invoked.');
}

Person.prototype.getFullName = function() {

	return `${this.firstname} ${this.lastname}`
};

const jane = new Person('Jane', 'Doe');
console.log(jane);