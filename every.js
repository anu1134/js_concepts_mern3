// every -- checks whether every element in array satisfies the condition
// some --- even if one element of array satisfies the condition

const transactions = [1000, 2000, 5000, 4000];

const result = transactions.every((amount) => amount > 0);

const result1 = transactions.some((amount) => amount > 0);

console.log(result);

console.log(result1);
