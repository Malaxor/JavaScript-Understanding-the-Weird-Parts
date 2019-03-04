
const person = {

    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {

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

logPersonName();
// calls executes the function, with the first argument being an object
logName.call(person, 'en', 'es');
// apply behaves like call but needs an array of arguments, excluding the first 
logName.apply(person, ['en', 'es']);
// example of IIFE with apply (works for bind and call)
(function(lang1, lang2) {

    console.log(`Logged: ${this.getFullName()}`);
    console.log(`Arguments: ${lang1} ${lang2}`);
    console.log('-------------------------');
}).apply(person, ['en', 'es']);

//function borrowing
const person2 = {

    firstName: 'Jane',
    lastName: 'Doe'
};
console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {

    return a * b;
}
// in this case, bind sets the first parameter to 2
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));