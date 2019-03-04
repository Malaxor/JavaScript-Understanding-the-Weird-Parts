const greetName = function(whatToSay) {

   return function(name) {
       console.log(`${whatToSay}, ${name}.`);
   }
}('Hello');

greetName('Tony');
