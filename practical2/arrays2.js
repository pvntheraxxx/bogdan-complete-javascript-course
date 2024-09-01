/* Замена элементов массива */

const myArray = [ 1,true,"Hello",null ];
console.log(myArray); // [ 1, true, 'Hello', null ]

myArray[0] = "New value";
console.log(myArray); // [ 'New value', true, 'Hello', null ]