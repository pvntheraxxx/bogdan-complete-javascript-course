/* Мутирование копий */

const person = {
    name: 'Bob',
    age: 25
}

// Здесь объект мутирует
const person2 = person;

person2.age = 28;
person2.isAdult = true;

console.log(person.age); // 26
console.log(person.isAdult); // true

console.log(person2.name); // Bob
console.log(person2.age); // 26
console.log(person2.isAdult); // true
