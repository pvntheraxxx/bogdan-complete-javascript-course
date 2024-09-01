/* Строки */

console.log("hello" instanceof String); // false
console.log(1 instanceof Number); // false
console.log(false instanceof Boolean); // false

const myString1 = new String("Hello");
console.log(myString1); // [String: 'Hello']
console.log(myString1 instanceof String);  // true
