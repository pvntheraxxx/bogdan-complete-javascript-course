/* Объявленная функция */

function myFn1(a,b) {
    let c 
    a = a + 1
    c = a + b
    return console.log(c)
}

/* Функциональное выражение */

const myFn2 = function(a,b) {
    let c
    a = a + 1
    c = a + b
    return console.log(c)
}

myFn1(5,10); // 16
myFn2(5,10); // 16