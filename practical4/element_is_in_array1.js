/* Поиск элементов примитивных типов в массивах */

const transports = [ 'Bus','Car','Bicycle','Airplane' ];

function isElementInArray (inputArray,searchElement) {
    return inputArray.includes(searchElement);
};

console.log(isElementInArray(transports,'Bus')); // true
console.log(isElementInArray(transports,'Phone')); // false
console.log(isElementInArray(transports,'Airplane')); // true