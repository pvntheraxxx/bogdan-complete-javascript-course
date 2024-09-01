const Person = 
{
    firstName:"Sasha",
    lastName:"Pushkin",
    age: 27,
    city: "Murmansk",
    skill: true,
    test1: null,
    test2: undefined
}
const copyPerson = Person;

/* Выводим значения свойств объекта "Person",
Используя разные переменные ссылочного типа */
console.log("Person.Имя: ",Person.firstName);
console.log("Person.Фамилия: ",Person.lastName);
console.log("Person.Возраст: ",Person.age);
console.log("Person.Город: ",Person.city);
console.log("Person.Навык: ",Person.skill);
console.log("Person.Тест1: ",Person.test1);
console.log("Person.Тест2: ",Person.test2);

/* Теперь выводим все значения из другой переменной,
которая ссылается на тот же самый объект */
console.log("copyPerson.Имя: ",copyPerson.firstName);
console.log("copyPerson.Фамилия: ",copyPerson.lastName);
console.log("copyPerson.Возраст: ",copyPerson.age);
console.log("copyPerson.Город: ",copyPerson.city);
console.log("copyPerson.Навык: ",copyPerson.skill);
console.log("copyPerson.Тест1: ",copyPerson.test1);
console.log("copyPerson.Тест2: ",copyPerson.test2);

/* Теперь создадим новые свойства для объекта,
используя разные переменные */
copyPerson.news = "Hello, New Field";
Person.u = "u";
console.log("copyPerson: ",copyPerson.u);
console.log("Person: ", Person.news);

/* Переменные ссылочного типа, которые ссылаются на
один и тот же объект в памяти браузера в сущности
представляют собой интерфейсы взаимодействия с этим
самым объектом */