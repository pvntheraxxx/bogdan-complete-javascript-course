/* Деструктуризация объектов */

const objectWithNumbers = {
    x:5,
    y:20,
    z:3,
};

const mult = (nums) => {
    const { x,y,z } = nums;
    return x * y * z;
};

const result = mult(objectWithNumbers);
console.log(result);
// 300