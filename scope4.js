/* Области видимости. Необъявленные переменные. */

function myFn() {
    a = true
    console.log(a);
}

myFn(); // не рекомендуется
console.log(a);   