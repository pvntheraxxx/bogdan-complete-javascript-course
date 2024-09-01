/* Передача значения по ссылке */
const personOne = {
    name: "Bob",
    age: 21
};
function increasePersonAge(person) {
    person.age += 1; 
    return person;
}
increasePersonAge(personOne);
console.log(personOne.age); // 22 