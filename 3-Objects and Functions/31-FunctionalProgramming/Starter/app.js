
function mapForEach(arr, fn) {

	const newArr = [];

	for(let element of arr) {

		newArr.push(
			fn(element)
		);
	}
	return newArr;
}

const arr1 = [1, 2, 3];

const arr2 = mapForEach(arr1, item => item * 2);
console.log(arr2);

const arr3 = mapForEach(arr1, item => item > 2);
console.log(arr3);

const checkPastLimit = (limiter, item) => item > limiter;

const arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

const checkPastLimitSimplified = limiter => item => item > limiter;

const arr5 = mapForEach(arr1, checkPastLimitSimplified(3));
console.log(arr5);