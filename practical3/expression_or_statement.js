/* Выражение или инструкция */

15 // <-- Expression-statement

// Statement
const myObject = { // <-- Expression
    x: 10,
    y: true,
};

// Expression-statement
myObject.z = 'abc'; // <-- Expression

delete myObject.x; // <-- Expression-statement

let newVariable; // <-- Statement

// Expression-statement
newVariable = 30 + 5; // <-- Expression

// Expression-statement
console.log(newVariable); // <-- 
/**             ^
 *          Expression
 * 
 * То, что в скобках - это выражение
 */

// Statement
if (newVariable > 10) { 
    /**     ^
     *  Expression
     * 
     */
    // Expression-statement
    console.log(`${newVariable} больше 10`); // <-- newVariable is expression
    /**         __________________________
     *                      ^
     *                  Expression
     */
}

/**
 * Выражения (Expressions)
 * 
 * Выражения в JavaScript - это часть кода, которая возвращает
 * определённое значение. Это может быть вызов функции, либо же
 * какая-то арифметическая операция. Выраженим называют ту часть
 * кода, результат которой мы используем, например, для присваивания
 * новой переменной, либо же в вызове функции. Это чистое выражение.
 * 
 * Инструкция (Statements)
 * 
 * Инструкция - это часть кода, которая выполняет определённые действия,
 * например, цикл (for) или условная инструкция (if).
 * 
 * Выражения-инструкции (Expression statements)
 * 
 * Выражения-инструкции - это выражения, которые находятся на отдельной 
 * строке кода и обычно, если используется точка запятой в конце строк
 * кода JavaScript, то такие завершаются точкой с запятой ';'. 
 * 
 * Вызов функции - это Expression
 * 
 * Выражения могут быть частью инструкций, и их можно использовать там, 
 * где требуется значение. Выражения могут быть простыми 
 * (например, числовые литералы) или сложными (например, вызовы 
 * функций).
 * */
