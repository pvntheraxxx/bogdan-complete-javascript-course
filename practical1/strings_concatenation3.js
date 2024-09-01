/* Strings Concatenation 3 */

const myName = "Саша";
const mySurname = "Пушкин";
const myProfession = "Программист";

const personInfo1 = 'Меня зовут ' + myName 
+ ' ' + mySurname + ' и я ' + myProfession;
console.log(personInfo1);

const personInfo2 = `Меня зовут ${myName} ${mySurname} и я ${myProfession}`;
console.log(personInfo2);

