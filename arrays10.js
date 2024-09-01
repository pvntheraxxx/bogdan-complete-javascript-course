/* Метод Unshift добавляет элемент в начале массива */

const myArray = [ 1,2,3 ];
console.log(myArray); // [ 1,2,3 ]

myArray.unshift(true); // Добавление элемента в начале массива
console.log(myArray); // [ true,1,2,3 ]

myArray.unshift("abc"); // Добавление ещё одного элемента в начале массива
console.log(myArray); // [ "abc",true,1,2,3 ]