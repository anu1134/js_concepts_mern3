// map -----> transform the contents of array

// print the square of each element of array

let a = [1, 2, 3, 4, 5];

// map always returns a new array
// does not change contents of original array

let squaredArray = a.map((num) => num * num);

console.log(a);
console.log(squaredArray);
