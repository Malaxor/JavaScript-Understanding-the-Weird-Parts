
const a = 3;
console.log(typeof a);

const b = 'Hello';
console.log(typeof b);

const c = {};
console.log(typeof c);

const d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));

function Person(name) {
   this.name = name;
}

const e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined);
console.log(typeof null);

const z = function() {};
console.log(typeof z);