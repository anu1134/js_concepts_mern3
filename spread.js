const a = [1, 2, 3];

const b = [4, 5, 6];
// spread

const combined = [...a, ...b];

console.log(combined);

const c = [...a];

c[1] = c[1] + 2;

console.log(c);
console.log(a);

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

const str = "Hello";

const chars = [...str];

console.log(chars);
