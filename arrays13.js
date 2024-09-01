/* Метод forEach */

const myArray = [ 1,2,3,10 ];
console.log(myArray);

const res = myArray.forEach(el => console.log(el * 2));
/* "el" является параметром для метода forEach, но 
аргумент "el" может иметь и другое название. Суть в том,
что метод forEach принимает один аргумент, а уж
как его называть - дело вкуса. */
console.log(myArray);
console.log("res: ", res);