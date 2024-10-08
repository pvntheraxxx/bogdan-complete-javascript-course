/* Деструктуризация массивов и "rest" оператор */

const arr = [ 1,2,3,4,5,6,7 ];

const [a,b,...c] = arr;

console.log(a);
console.log(b);
console.log(c);