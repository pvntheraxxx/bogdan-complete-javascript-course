/* Значения параметров функции по умолчанию */

const getDiff = (firstNumber,secondNumber = 10) => {
    result = firstNumber - secondNumber;
    return console.log(result);
}

getDiff(1,1); // 0
getDiff(1); // -9