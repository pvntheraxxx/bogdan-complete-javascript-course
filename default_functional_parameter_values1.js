/* Значения параметров функции по умолчанию */

const calcSum = function(FirstNumber,SecondNumber = 10) {
    result = FirstNumber + SecondNumber;
    return console.log(result);
}

calcSum(1,1); // 2
calcSum(1); // 11

/* Вывод: в случае отсутствие второго аргумента, в качестве
второго аргумента будет передано значение по умолчанию,
т.е. десять. */