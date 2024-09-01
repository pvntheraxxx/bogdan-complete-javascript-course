/* Создание копии объекта */

const personOne = {
    name: "Bob",
    age: 21
};

function increasePersonAge(person) {
    const updatedPerson = Object.assign({},person);
    updatedPerson.age += 1;
    return updatedPerson;
}

const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age); // 21
console.log(updatedPersonOne.age); // 22