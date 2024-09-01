/* Объявление и вызов функции */

function printMyName() {
    const myName = "Sasha";
    console.log(myName);
}

printMyName(); // Sasha


const result = printMyName();
console.log(result); 

/* Поскольку в функции printMyName() отсутствует 
оператор return, функция printMyName() по умолчанию
возвращает тип "undefined". */