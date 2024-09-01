/* Формат записи массивов */

// Первый метод созда ния массива
const myArray = [1,2,3];
console.log(myArray); // [1,2,3]

// Второй метод создания массива
const myArray2 = new Array(1,2,3);
console.log(myArray2); // [1,2,3]

const myArray3 = new Array();
console.log(myArray3); // []

console.log(myArray === myArray2); // false
console.log(myArray2 === myArray3); // false
console.log(myArray === myArray3); // false

/* Вывод: массивы не могут быть равны друг другу даже
если их значения одинаковы потому что они являются
разными объектами, которые находятся где-то в памяти.*/