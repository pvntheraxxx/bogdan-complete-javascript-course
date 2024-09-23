/* Операторы 'rest' (остаток) и 'spread' (распространение) */

const scores1 = [ 0,1.5,2.5,3.7 ];
const scores2 = [ 1.7,4.5,0,4.9,5.0,4.2 ];
const scores3 = [ 1.3,2.5,1.9 ];
const scores4 = [ 'abc',1.3,true,2.5,1.9 ];

function meanScore (...numbers) {
    if (numbers.some((num) => typeof num !== 'number')) {
        throw new Error('Все аргументы в вызове функции должны быть числами!');
        return 
    }
    return numbers.reduce((mean,num) => mean + num / numbers.length,0).toFixed(2);
};

console.log(meanScore(...scores1));
console.log(meanScore(...scores1,...scores2));
console.log(meanScore(...scores1,...scores2,...scores3));
console.log(meanScore(...scores4));