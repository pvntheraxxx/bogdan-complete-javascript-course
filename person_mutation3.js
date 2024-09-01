const person = {
    name: "Sasha",
    age: 27
};

const person1 = person;
const person2 = person;
const person3 = person;


person1.age = 25;
person2.isAdult = true;
person3.name = "Pvnthera XXX";

console.log(person1);
console.log(person2);
console.log(person3);

/* Копий объектов ссылочного типа и мутаций может быть сколько
угодно, главное помнить, что все они изменения через каждую из 
копий вляют на исходный объект (первоначальный, объект-родитель). 
*/