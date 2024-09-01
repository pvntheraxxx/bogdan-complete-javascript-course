/* Создание объекта */

const Person = {
    firstName: "Sasha",
    lastName: "Pushkin",
    favoriteNumber: 777,
};

const MyMessage = `My name is ${Person.firstName} ${Person.lastName} and my favorite number is ${Person.favoriteNumber}.`;
console.log(MyMessage);