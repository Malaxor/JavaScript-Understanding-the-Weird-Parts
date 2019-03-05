
// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a, b);

// by reference (all objects)
var c = { greeting: 'hello' };
var d;

d = c;
c.greeting = 'salut'; // mutate

// by reference (parameters)
function changeGreeting(obj) {

    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);

c = { greeting: 'howdy' };

console.log(c);
console.log(d);