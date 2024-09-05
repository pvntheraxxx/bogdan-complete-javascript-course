/* Сравнение переменных */

let myVariable1 = 1;
let myVariable2 = '5';

let myVar1 = Number(myVariable1);
let myVar2 = Number(myVariable2);

console.log(`Тип myVar1 равен:`, typeof myVar1);
console.log(`Тип myVar1 равен:`, typeof myVar2);

console.log(myVar1 <= myVar2);

console.log(`Тип myVar1 равен:`, typeof myVar1);
console.log(`Тип myVar2 равен:`, typeof myVar2);

myVariable1 = '20';
myVariable2 = 100;

let myVar3 = Number(myVariable1);
let myVar4 = Number(myVariable2);

console.log(myVar3 <= myVar4);