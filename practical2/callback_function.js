/* Колбэк функция */

const getMessage = () => {
    return console.log("Hello world");
};

setTimeout(getMessage, 1000);

/* Обратите внимание, что getMessage не нужно
вызывать. Мы передаём только имя этой функции.
А уже вызов этой функции произойдёт внутри 
функции setTimeout(). */