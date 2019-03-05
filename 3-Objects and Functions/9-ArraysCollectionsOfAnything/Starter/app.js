
var arr = [
    
    1,
    false,
    {
        name: 'Philip',
        city: 'Phoenix'
    },
    function(name) {
        var greeting = 'Hello';
        console.log(`${greeting}, ${name}`);
    },
    'Yo-Yo'
];
arr[3](arr[2].name);