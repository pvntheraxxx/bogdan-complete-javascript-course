/* Пять ложных значений в JavaScript */

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

console.log(Boolean(" ")); // true
console.log(Boolean(1)); // true
console.log(Boolean(1.2)); // true
console.log(Boolean(-21)); // true
console.log(Boolean(0.5)); // true