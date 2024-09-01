/* Присваивание функции переменной */

const myFn = function(name) {
    return console.log(`Привет, ${name}`);
}

const myArray = ["First"," Second"," Third"];

myFn(1); // Привет, 1
myFn("Sasha"); // Привет, Sasha
myFn(null); // Привет, null
myFn(undefined); // Привет, undefined
myFn(true); // Привет, true

myFn(myArray); // Привет, First, Second, Third
myFn(myArray[0]); // Привет, First
myFn(myArray[1]); // Привет, Second
myFn(myArray[2]); // Привет, Third