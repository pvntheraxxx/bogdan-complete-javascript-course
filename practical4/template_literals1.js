/* Шаблонные строки */

const myNumber = 9;

const templateLiteral = (num) => {
    return `Число ${num}
Это число ${num < 10 ? 'меньше' : 'больше или равно'} 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.\n`
}

console.log(templateLiteral(myNumber));

const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));