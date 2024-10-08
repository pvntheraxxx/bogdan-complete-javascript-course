/* Spread Operator */

const a = [ 1,2 ];
const b = [ 4,5 ];
const c = [ 8,9,10 ];
const d = 11;

const combinedArray = [ 0,...a,3,...b,6,7,...c,d ];
console.log(combinedArray);

console.log(a);
console.log(b);
console.log(c);