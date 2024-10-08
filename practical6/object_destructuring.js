/* Деструктуризация объектов */

const objectWithNumbers = {
    x:5,
    y:20,
    z:3,
};

const {x,y,z} = objectWithNumbers;
const mult = () => x * y * z;
console.log(mult());
// 300