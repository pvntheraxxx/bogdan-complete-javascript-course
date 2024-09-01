/* Метод массива Pop удаляет элемент с конца массива. 
У него нет и не должно быть аргументов. */

const myArray = [ 1,2,3 ];
console.log(myArray); // [ 1,2,3 ];

myArray.pop(); // Удаляем элемент с конца массива
console.log(myArray); // [ 1,2 ]

const removedElement = myArray.pop(); 
// В строке выше метод pop() помещает удаляемый
// элемент в переменную removedElement
// т.е. метод pop() может не только удалять элементы  

console.log(myArray); // [1]
console.log(removedElement); // 2

