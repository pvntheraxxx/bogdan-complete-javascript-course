/* Метод Map */

const myArray = [ 1,2,3 ];
console.log(myArray); 

// С использованием анонимного функционального выражения
const newArray = myArray.map(function (el) {
    return el * 3;
});

console.log(newArray); 
console.log(myArray);  