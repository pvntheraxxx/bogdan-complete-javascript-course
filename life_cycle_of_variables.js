/* Жизненный цикл переменных */

let a
let b

function myFn() {
    let b 
    a = true 
    b = 10
    console.log(b); // 10
}

myFn()

console.log(a); // true
console.log(b); // undefined 