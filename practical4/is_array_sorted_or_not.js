/* Проверка сортировки массива */

const a = [ 5,'abc',10,1 ];
const b = [ 4,10,14,25,25,50 ];
const c = [ 150,132,80,40 ];
const d = [ 15,26,10,23,85 ];

const arraySortInfo = ( inputArray ) => {
    let hasNonNumber = inputArray.some(item => typeof item !== 'number');
    let isSortedAscending = inputArray.every((v,i,a) => !i || a[i-1]<=v);
    let isSortedDescending = inputArray.every((v, i, a) => !i || a[i - 1] >= v);

    if (hasNonNumber) {
        console.log(`Некоторые элементы массива ${'inputArray'} не являются числами`);
    } else {
        console.log(`Все элементы массива ${'inputArray'} являются числами.`);
    }
    
    if (isSortedAscending) {
        console.log(`Массив ${'inputArray'} отсортирован по возрастанию`);
    } else {
        console.log(`Массив ${'inputArray'} не отсортирован по возрастанию`);
    }

    if (isSortedDescending) {
        console.log(`Массив ${'inputArray'} отсортирован по убыванию`);
    } else {
        console.log(`Массив ${'inputArray'} не отсортирован по убыванию`);
    }
};

arraySortInfo(a);
// arraySortInfo(b);
// arraySortInfo(c);
// arraySortInfo(d);
