
// JS engine converts string primitive into an object
String.prototype.isLengthGreaterThan = function(limit) {

   return this.length > limit;
}
console.log('John'.isLengthGreaterThan(3));
// JS does not, however, automatically convert a number primitive into an object
Number.prototype.isPositive = function() {

   return this > 0;
}
// This will not work!
// console.log(3.isPositive());

// This will work!
const num = new Number(3);
console.log(num.isPositive())