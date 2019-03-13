// Polyfill
if(!Object.create) {
   // Object = global object
   Object.create = function(obj) {

      if(arguments.length > 1) {

         throw new Error('Object.create implemenetation' + ' only accepts the first parameter.');
      }
      function F() {};
      F.prototype = obj;
      return new F();
   };
}

const person = {

   firstName: 'Default',
   lastName: 'Default',
   greet() {
      return `Hello, ${this.firstName} ${this.lastName}`;
   }
};

const john = Object.create(person);
john.firstName = 'John';
john.lasName = 'Doe';
console.log(john);