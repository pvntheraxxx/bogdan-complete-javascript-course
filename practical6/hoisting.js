/* Hoisting */

const a = 5;
const b = 10;

if (b > a) {
    c = a + b + c;
    let c = 2;
    console.log(c);
}

console.log(c);