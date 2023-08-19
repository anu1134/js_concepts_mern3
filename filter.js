// filter ----> take out some contents from the array based on condition

let a = [1, 2, -3, 4, 5];

function isEven(val) {
  return val % 2 == 0;
}

function isOdd(val) {
  return val % 2 != 0;
}

// filter also returns a new array

const evenNumbers = a.filter(isEven);

console.log(evenNumbers);
const negativeNumbers = a.filter(function (val) {
  return val < 0;
});

console.log(negativeNumbers);
console.log(a);
