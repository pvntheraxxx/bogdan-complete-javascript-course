/* Функциональное выражение в вызове другой функции */

function printMyMessage() {
    return console.log("Отложенное сообщение")
}
setTimeout(printMyMessage, 1000);