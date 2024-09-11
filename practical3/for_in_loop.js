/* Цикл for...in */

const myObject = {
    name: 'Mike',
    age: 30,
    city: 'London',
};

Object.prototype.country = 'England';

for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log("Наследуемое свойство { " + key + " }. Значение: " + myObject[key]);
      } // else {
        //console.log("Ненаследуемое свойство { " + key + " }. Значение: " + myObject[key]);
     // }
};
