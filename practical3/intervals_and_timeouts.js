/* Интервалы и Таймауты */

let i = 1;

const messageIntervalId = setInterval(() => {
    console.log(`Сообщение номер ${i}`);
    i += 1;
}, 2000);

setTimeout(() => clearInterval(messageIntervalId), 11000);