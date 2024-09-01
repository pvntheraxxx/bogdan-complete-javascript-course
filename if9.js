/* Использование if в функциях */

const sumPositiveNumbers = ( a,b ) => {

    if (typeof a !== "number" || typeof b !== "number") {
        return console.log("One of the arguments is not a number");
    };

    if (a <= 0 || b <= 0) {
        return console.log("Numbers are not positive");
    };
    
    return console.log(a + b);
};

sumPositiveNumbers("a",true); // One of the arguments is not a number
sumPositiveNumbers(-10,5); // Numbers are not positive
sumPositiveNumbers(3,8); // 11

/* 3 и 8 не попадают под условия выражений первой
инструкции if и второй инструкции if */