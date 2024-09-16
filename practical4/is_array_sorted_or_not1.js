/* Проверка сортировки массива */

const a = [ 5,'abc',10,1 ];
const b = [ 4,10,14,25,25,50 ];
const c = [ 150,132,80,40 ];
const d = [ 15,26,10,23,85 ];

const arraySortInfo = (inputArray) => {
    if (inputArray.some(( element ) => typeof element !== 'number')) {
        return 'Некоторые элементы не являются числами';
    }
    if (inputArray.every(( element,index ) => 
    index > 0 
    ? element >= inputArray[index - 1] 
    : true)){
        return 'Массив отсортирован по возрастанию';
    }
    if (inputArray.every(( element,index ) => 
    index > 0 
    ? element <= inputArray[index - 1] 
    : true)){
        return 'Массив отсортирован по убыванию';
    }

    return "Массив не отсортирован"
};

console.log(arraySortInfo(a));
console.log(arraySortInfo(b));
console.log(arraySortInfo(c));
console.log(arraySortInfo(d));