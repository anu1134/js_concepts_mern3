// reduce = iterate through contents of array and return single sum

// find sum of all the elements of the array

let a = [1, 2, 3, 4, 5];

// var sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }

const result = a.reduce(function (sum, curr) {
  return sum + curr;
}, 0);

console.log(result);

const result1 = a.reduce(function (mul, current) {
  return mul * current;
}, 1);

console.log(result1);
