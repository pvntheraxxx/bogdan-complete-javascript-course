/* Замена части строки */

const showTimeOfDay = "Good Morning";
const re = /Morning/;
const newStr = showTimeOfDay.replace(re, "Evening");

console.log(showTimeOfDay); // Good Morning
console.log(newStr); // Good Evening
