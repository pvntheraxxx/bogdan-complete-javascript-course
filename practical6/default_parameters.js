/* Параметры функции по умолчанию */

function multiplyBy (a,mult = 2) {
    console.log(a * mult);
};

multiplyBy(2);
// 4

multiplyBy(2,undefined);
// 4

multiplyBy(2,0);
// 0

multiplyBy(5,10);
// 50