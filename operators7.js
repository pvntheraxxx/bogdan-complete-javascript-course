/* Логические операторы короткого замыкания
Логичекое "И" (логическое умножение) 
и логическое "ИЛИ" (логическое сложение) */


console.log("Bogdan" || "Default value"); // "Bogdan"
console.log("" || "Default value"); // "Default value"

console.log("Bogdan" && false); // false 
console.log(1 && "Bogdan"); // "Bogdan"