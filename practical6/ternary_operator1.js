/* Тернарный оператор */

function isNumber (a) {
    return typeof a === 'number' ? `${a} - это число` 
    : `${a} - это не число`;
};

console.log(isNumber(11));
console.log(isNumber(12));
console.log(isNumber('hi'));