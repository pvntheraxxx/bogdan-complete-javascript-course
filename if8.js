/* Инструкция if */

// условие может быть истинно сразу для двух блоков
const age = 25;

if (age >= 18) { // true
    console.log("Is adult");
};

if (age >= 12 && age < 18) { // от 12 до 18 включительно
    console.log("Is teenager");
};

if (age < 12) {
    console.log("Is child");
};