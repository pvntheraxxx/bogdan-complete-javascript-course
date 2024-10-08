/* Копия массива */

const a = [ 1,2,3 ];
const b = JSON.parse(JSON.stringify(a));
// Создание копии массива без мутаций

console.log('original array: ', a);
console.log('copy array: ', b);
