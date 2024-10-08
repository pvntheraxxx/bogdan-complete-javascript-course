/* Сумма чисел */

function sumNumbers () {
    let sum = 0;
    for (let i = 0; i < arguments.length;i++) {
        sum += arguments[i];
    };
    console.log('Sum of all arguments is', sum);
    return sum;
};

sumNumbers(1,3);
sumNumbers(10,20,6); 
sumNumbers(2,5,80,1,10,12);