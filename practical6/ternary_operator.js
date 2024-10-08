/* Тернарный оператор */

function isNumberOne (a) {
    if (typeof a === 'number') {
        return `${a} - это число`;
    } else {
        return `${a} - это не число`;
    };
};

const isNumberTwo = (a) => typeof a === 'number' ? `${a} - это число` : `${a} - это не число`; 

console.log(isNumberTwo(10));
console.log(isNumberTwo('Привет'));
console.log(isNumberTwo(true));