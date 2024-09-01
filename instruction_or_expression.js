/* Инструкция или выражение ? */

function myFn(a) {
    console.log(a);
};

const b = true;
let c = 10;

myFn(c) // 10
myFn(2 + 3) // 5
myFn(b); // true
myFn(c = c + 1) // 11
