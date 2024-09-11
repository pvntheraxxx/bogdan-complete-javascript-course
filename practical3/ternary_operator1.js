/* Тернарный оператор */

function isArrayEmpty (inputArray) {
    if (inputArray.length > 0) {
        return 'Массив не пустой';
    };
    return 'Массив пустой';
}

console.log(isArrayEmpty([1,3])); // Массив не пустой 
console.log(isArrayEmpty([])); // Массив пустой