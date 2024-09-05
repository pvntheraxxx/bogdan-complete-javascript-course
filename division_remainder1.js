/* Остаток от деления */

const myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3;

console.log(myNumber1 % myNumber2);

/* 
* Приоритетность оператора % - 13 (выше чем у операторов + и -)
* Ассоциативность оператора % - left-to-right
*/

console.log(((100 % 23) % 5) % 3);