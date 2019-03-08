
const person = {

	firstName: 'John',
	lastName: 'Doe',
	getFullName() {

		const fullName = `${this.firstName} ${this.lastName}`;
		return fullName;
	}
};

const logName = function(lang1, lang2) {

	console.log(`Logged: ${this.getFullName()}`);
	console.log(`Arguments: ${lang1} ${lang2}`);
	console.log('----------------------------');
}
// bind creates a copy of the function
const logPersonName = logName.bind(person);

logPersonName('en', 'es');
// calls executes the function, with the first argument being an object
logName.call(person, 'en', 'es');
// apply behaves like call but needs an array of arguments, excluding the first 
logName.apply(person, ['en', 'es']);
// example of IIFE with apply (also works with call)
(function(lang1, lang2) {

	console.log('With dot apply/call attached directly to function');
	console.log(`Logged: ${this.getFullName()}`);
	console.log(`Arguments: ${lang1} ${lang2}`);
	console.log('-------------------------');
}).call(person, 'en', 'es');

//function borrowing
const person2 = {

   firstName: 'Jane',
   lastName: 'Doe'
};
console.log(person.getFullName.apply(person2));

// function currying (creating a copy of a function with preset parameters)
function multiply(a, b) {

   return a * b;
}
// in this case, bind sets the first parameter to 2
// you could hardcode any and all parameters
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));