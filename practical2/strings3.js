/* Строки */

const myString = new String("Hello");

console.log(myString instanceof String); // true
console.log(typeof myString); // object
console.log(myString); // [String: 'Hello']

/* myString является экземпляром класса String и 
тип значения переменной myString - объект.
myString - это объект. И у этого объекта есть
методы и свойства. Мы можем вызывать эти методы
и свойства, обращаться к ним. */

/* Даже если мы создали переменную и присвоили ей
значение примитивного типа строка, всё равно у нас
есть доступ ко всем методам, которые доступны для
экземпляров строк в JavaScript. */