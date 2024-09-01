/* forEach для объектов */

const myObject = {
    x: 10,
    y: true,
    z: 'abc',
};

Object.values(myObject).forEach(value => {
    console.log(value);
});