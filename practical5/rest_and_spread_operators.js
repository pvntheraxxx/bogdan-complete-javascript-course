/* Операторы 'rest' (остаток) и 'spread' (распространение) */

function meanScore(...args) {
    // Проверяем, все ли аргументы являются числами
    if (!args.every(arg => typeof arg === 'number')) {
        return console.log("Все аргументы в вызове функции должны быть числами!");
    }

    // Вычисляем среднее значение
    const sum = args.reduce((acc, val) => acc + val, 0);
    const mean = sum / args.length;

    // Возвращаем результат, округленный до двух знаков после запятой
    return mean.toFixed(2);
}

// Пример использования
console.log(meanScore(10, 20, 30)); // 20.00
console.log(meanScore(5, 10, 'строка')); // Ошибка

