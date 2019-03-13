
const people = [
   { // the john object
      firstName: 'John',
      lastName: 'Doe',
      addresses: [
         '111 Main St.',
         '222 Third St.'
      ]
   },
   { // the jane object
      firstName: 'Jane',
      lastName: 'Doey',
      addresses: [
         '123 E South St.',
         '456 N Blvd.'
      ],
      greet() {
         return `Hello! I'm ${this.firstName}, ${this.lastName}.`
      }
   }
];

console.log(people[1].greet());