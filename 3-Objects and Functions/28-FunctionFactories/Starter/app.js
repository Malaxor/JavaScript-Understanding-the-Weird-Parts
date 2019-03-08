
function makeGreeting(language) {

	return function(firstName, lastName) {

		language === 'en' && console.log(`Hello, ${firstName} ${lastName}.`);
		language === 'es' && console.log(`Hola, ${firstName} ${lastName}.`);
	}
}

const greetEnglish = makeGreeting('en');
const greetSpanish = makeGreeting('es');

greetEnglish('Philip', 'Alexander');
greetSpanish('Philip', 'Alexander');