
Array.prototype.myCustomFeature = 'cool';

const arr = ['John', 'Jane', 'Jim'];

// Don't use for in loops with arrays
for(let prop in arr) {

   console.log(`${prop}: ${arr[prop]}`);
}