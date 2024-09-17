/* Поиск элементов примитивных типов в массивах */

const transports = [ 'Bus','Car','Bicycle','Airplane' ];

const isElementInArray = (inputArray,searchElement) => {
    if (inputArray.find(el => el === searchElement)) {
        return true;
    }
    
    return false;
}

console.log(isElementInArray(transports,'Bus')); // true
console.log(isElementInArray(transports,'Phone')); // false
console.log(isElementInArray(transports,'Airplane')); // true