/* Как избежать мутаций объектов, вариант 1 */
const person = {
    name: "Bob",
    age: 25
};
const person2 = Object.assign({},person);
person2.age = 26;

console.log(person2.age); // 26
console.log(person.age); // 25