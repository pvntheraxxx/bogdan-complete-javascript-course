/* Объявление и вызов функции */

function printMyName() {
    const myName = "Sasha";
    console.log(myName);
}

function printMyName2() {
    const myName = "Sasha";
    return myName; // добавлен "return"
}

printMyName(); // Sasha

const result1 = printMyName();
console.log(result1); // Sasha

/* Поскольку в функции printMyName() отсутствует 
оператор return, функция printMyName() по умолчанию
возвращает тип "undefined". */

const result2 = printMyName2();
console.log(result2);

/* В функцию printMyName2() был добавлен оператор 
"return", который возвращает значение переменной "myName"  
и выводит его в консоль */