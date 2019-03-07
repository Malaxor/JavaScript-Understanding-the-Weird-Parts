
// Immediately Invoked Function Expression (IFFE)
var greeting = function(name) {

   return `Hello, ${name}.`;
}('Phil');

console.log(greeting);

var firstName = 'Johnny';

// IIFE
(function(name) {
	
	var greeting = 'Hello';
   console.log(`${greeting}, ${name}. I'm a function expression.`)
}(firstName));