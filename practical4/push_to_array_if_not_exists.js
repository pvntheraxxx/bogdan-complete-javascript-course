/* Добавление уникальных элементов в массив */

const myNumbers = [ 123,50,27 ];

function pushIfUnique (inputArray,newElement) {
    if (inputArray.includes(newElement)) {
        return console.log(`${newElement} уже находится в массиве`);
    } else {
        inputArray.push(newElement)
        return console.log(`Добавлен новый элемент: ${newElement}`);
    }
};

pushIfUnique(myNumbers,50); // 50 уже находится в массиве
console.log(myNumbers); // [ 123, 50, 27 ]

pushIfUnique(myNumbers,80);
console.log(myNumbers); // [ 123, 50, 27, 80 ]

pushIfUnique(myNumbers,27); // 50 уже находится в массиве
console.log(myNumbers); // [ 123, 50, 27, 80 ]

pushIfUnique(myNumbers,22); 
console.log(myNumbers); // [ 123, 50, 27, 80, 22 ]

pushIfUnique(myNumbers,80); // 80 уже находится в массиве
console.log(myNumbers); // [ 123, 50, 27, 80 ]