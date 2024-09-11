/* Тернарный оператор */

const isArrayEmpty = (inputArray) => {
    return inputArray.length > 0 
    ? 'Массив не пустой' 
    : 'Массив пустой';
};

console.log(isArrayEmpty([1,3])); // Массив не пустой 
console.log(isArrayEmpty([])); // Массив пустой
