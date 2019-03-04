
const person = {

	firstName: 'Philip',
	lastName: 'Costache',
	address: {
		street: '123 Somewhere Blvd.',
		city: 'Phoenix',
		state: 'AZ'
	}
};

function greet({ firstName }) {

	console.log(`Hi ${firstName}`);
}
greet({ firstName: 'Mary', lastName: 'Doe' });