/* Случайные числа */

const MIN = 1000;
const MAX = 9999;

const myNumbers = [ 2355,7235,8135,1762,2361,8351 ];

function getRandomNumber () {
    return console.log(Math.floor(Math.random() * (MAX - MIN) + MIN));
};


getRandomNumber();