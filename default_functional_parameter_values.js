/* Значения параметров функции по умолчанию */

function multByFactor(value, multiplier = 1) {
    return console.log(value * multiplier) 
}

multByFactor(10,2) // 20
multByFactor(5) // 5