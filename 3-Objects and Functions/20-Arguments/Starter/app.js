
function greet(firstName, lastName, language) {

	if(arguments.length === 0) {
		console.log('Missing arguments');
		console.log('-----------------');
		return;
	}
	console.log(firstName);
	console.log(lastName);
	console.log(language);
	console.log(arguments);
	console.log('----------------');
}
greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'EN');