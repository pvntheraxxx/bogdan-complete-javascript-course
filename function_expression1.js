/* Присваивание функционального выражения переменной */

const myFunction = function(a,b) {
    let c
    a = a + 1
    c = a + b 
    return console.log(c)  
}

myFunction(5,3) // 9 