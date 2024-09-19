/* Шаблонные строки */

const myNumber = 9;

const templateLiteral = (num) => {
    return `Число ${num}` + `\n` +
    `${num <= 10 ? 'Это число меньше 10' : 'Это число больше или равно 10'}` + `\n` 
    + `Квадратный корень этого числа - ${Math.sqrt(num)}` + `\n`;
};

console.log(templateLiteral(myNumber));

const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));