/* Пример if с оператором отрицания  */

const person = {
    // name: "Sasha",  
    age: 20,
}; 
 
if (!person.name) {
    console.log("Имя не указано");
    // Другие действия в случае, если
    // свойства "name" у объекта "person" нет
}