/* Деструктуризация объектов */

const objectWithNumbers = {
    x:5,
    y:20,
    z:3,
};

const mult = ({ x,y,z }) => x * y * z;

const result = mult(objectWithNumbers);
console.log(result);
// 300