const person = {
    name: 'Bob',
    age: 21
}

// Здесь происходит т.н. мутация
person.age = 22;
person.isAdult = true;

console.log(person.age); // 22
console.log(person.isAdult); // true