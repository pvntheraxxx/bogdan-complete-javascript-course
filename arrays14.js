/* Метод Map */

const myArray = [ 1,2,3 ];
console.log(myArray); // [ 1,2,3 ]

const newArray = myArray.map(el => el * 3);

console.log(newArray); // [ 3,6,9 ]
console.log(myArray); // [ 1,2,3 ]
// Оригинальный массив не изменился