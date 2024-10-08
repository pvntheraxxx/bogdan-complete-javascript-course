/* Проверка наличия аргументов в вызове функции */

function square (a) {
    if (arguments.length === 0) {
        throw new Error('Функция "square" не может быть вызвана без аргумента');
    }
    console.log(a * a);
};

square(10);
square();
