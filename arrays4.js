/* Длина массива */

const myArray = [ 1,2,3,4 ];
console.log(myArray); // [1,2,3,4]
console.log(myArray.length); // 4

myArray[2] = "abc"; 
// меняем значение элемента 2 на "abc"
console.log(myArray); // [1,2,'abc',4]
console.log(myArray[2]); // "abc"

myArray[4] = true; // 4 потому что индексы с нуля
// меняем значение элемента 4 на 'true'
console.log(myArray); // [1,2,"abc",4,true]
console.log(myArray.length); // 5