/* Дата */

const currentDate = new Date();

const currentDateInMs = currentDate.getTime();
const currentDateInMonths = currentDate.getMonth();
const currentDateInSeconds = currentDate.getSeconds();
const currentDateInYHours = currentDate.getHours();

console.log(
    currentDateInMs, // 1723470478291
    currentDateInMonths, // 7
    currentDateInSeconds, // 15
    currentDateInYHours, // 16
);