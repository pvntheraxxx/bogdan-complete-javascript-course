/* Сравнение двух массивов */

const a = [ 1,2,3 ];
const b = [ 1,2,3 ];
const c = [ 2,1,3 ];
const d = [ 'a',2,3 ];

const areArraysEqual = (firstArray,secondArray) => {
    let isCompared = 
    firstArray.length === secondArray.length 
    && firstArray.every((element,index) => element === secondArray[index]);

    if (isCompared) {
        return true; 
    }
    return false;
};

console.log(areArraysEqual(a,b)); // true
console.log(areArraysEqual(a,c)); // false
console.log(areArraysEqual(a,d)); // false
console.log(a === b); // false (Почему?) --- Объект - это ссылочный тип