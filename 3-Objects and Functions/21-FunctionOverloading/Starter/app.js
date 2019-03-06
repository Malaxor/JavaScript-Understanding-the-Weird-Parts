
function greet(firstName, lastName, language) {
	
	language === 'en' && console.log(`Hello, ${firstName} ${lastName}`);
	language === 'es' && console.log(`Hola, ${firstName} ${lastName}`);
}

function greetEnglish(firstName, lastName) {
	greet(firstName, lastName, 'en');
}
function greetSpanish(firstName, lastName) {
	greet(firstName, lastName, 'es');
}
greetEnglish('John', 'Doe');
greetSpanish('Juan', 'Doxe');