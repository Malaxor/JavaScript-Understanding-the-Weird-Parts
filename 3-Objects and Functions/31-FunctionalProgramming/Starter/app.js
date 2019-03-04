
function mapForEach(arr, fn) {

    const newArr = arr.map(item => {

        return fn(item);
    });
    return newArr;
}

const arr1 = [1, 2, 3];
console.log(arr1);

const arr2 = mapForEach(arr1, item => {

    return item * 2;
});
console.log(arr2);

const arr3 = mapForEach(arr1, item => {

    return item > 2;
});
console.log(arr3);

const checkPastLimit = (limiter, item) => {

    return item > limiter;
};
// function currying
const arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

const checkPastLimitSimplified = parentLimiter => {

    return function(limiter, item) {

        return item > limiter;
    // binding the inner function's first parameter to the parent's parameter
    }.bind(this, parentLimiter);
};

const arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);