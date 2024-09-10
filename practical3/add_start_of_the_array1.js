/* Добавление элементов в начало массива */

const myArray = [ true,null ];
myArray.unshift('Hi');
myArray.unshift(100);

console.log(myArray.length); // 4
console.log(myArray); // [ 100, 'Hi', true, null ]

