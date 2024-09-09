/* Строгий режим */

'use strict';

function myFunction () {
    let a = 2;
    return console.log(a);
};

myFunction();

// Переменная 'a' доступна только внутри функции
// console.log(a);
// ReferenceError: a is not defined

/* В строгом режиме 'use strict' запрещается 
использование необъявленных переменных. */