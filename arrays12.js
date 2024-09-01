/* Метод forEach */

const myArray = [ 1,2,3,];
console.log(myArray); // [ 1, 2, 3 ]

myArray.forEach(el => console.log(el * 2));

console.log(myArray); // [ 1, 2, 3 ]
// Оригинальный массив не изменился