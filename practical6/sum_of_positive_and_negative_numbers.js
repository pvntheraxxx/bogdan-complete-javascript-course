/* Сумма положительных и отрицательных чисел */

const nums = [10,-12,30,-1,-8,0,14,-33,20];

function sumPositiveNegative (arr) {
    return arr.reduce((sums,num) => {
        if (num > 0) { 
            return {
                positive: sums.positive + num,
                negative: sums.negative
            }
        };
        return {
            positive: sums.positive,
            negative: sums.negative  + num
        };
    }, { positive: 0, negative: 0 });
};

const result = sumPositiveNegative (nums);
console.log(result);