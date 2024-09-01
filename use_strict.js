'use strict'

function myFn() {
    a = true // Uncaught ReferenceError: "a" is not defined at myFn
    console.log(a);
}

myFn()
console.log(a); 

/* Вывод: 'use strict' запрещает использование необъявленных переменных. */