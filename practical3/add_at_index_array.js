/* Добавление элемента по определённому индексу */

const myArray = [ 1,2 ];

myArray.splice(10,0,'abc');
// people.splice(1, 0, "Alice");  // добавляем элемент "Alice" по индексу 1

console.log(myArray.length);
console.log(myArray);