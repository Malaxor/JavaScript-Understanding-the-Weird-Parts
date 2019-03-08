
function sayHiLater() {

    const greeting = 'Hi!';

    setTimeout(() => {

        console.log(greeting);
    }, 3000);
}
sayHiLater();

function tellMeWhenDone(callback) {

    const a = 1000;
    const b = 2000;

    callback(a, b);
}

tellMeWhenDone((a, b) => {

    console.log('I am done', a);
    console.log(`I'm also done`, b);
});