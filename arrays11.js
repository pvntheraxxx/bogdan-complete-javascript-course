/* Shift - это метод, который удаляет первый элемент
в начале массива. */

const myArray = [ 1,2,3 ];
console.log(myArray); // [ 1,2,3 ]

myArray.shift();
console.log(myArray); // [ 2,3 ]

const removedElement = myArray.shift();
// сохраняем результат работы метода shift
// в переменную removedElement 

console.log(myArray); // [3]
console.log(removedElement); // 2