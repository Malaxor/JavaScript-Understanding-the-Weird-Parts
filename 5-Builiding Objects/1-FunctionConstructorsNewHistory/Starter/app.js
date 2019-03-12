
function Person(firstName, lastName) {

	console.log(this);
   this.firstName = firstName;
	this.lastName = lastName;
	console.log('This function is being invoked');
}

const john = new Person('John', 'Doe');
console.log(john);

const jane = new Person('Jane', 'Doe');
console.log(jane);