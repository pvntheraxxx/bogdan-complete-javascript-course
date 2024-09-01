/* Строки */

const myString1 = "Hello";
const myString2 = myString1.toUpperCase();

console.log(myString2); // HELLO
console.log(typeof myString1); // string

console.log(myString1 instanceof String); // false
console.log(myString1 instanceof Number); // false
console.log(myString1 instanceof Boolean); // false

console.log(myString1 instanceof Symbol); // false
console.log(myString1 instanceof BigInt); // false
console.log(myString1 instanceof Object); // false

console.log(myString1 instanceof Date); // false





