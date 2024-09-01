/* for in для объектов */

const myObject = {
    x: 10,
    y: true,
    z: 'abc',
};

for (const key in myObject) {
    console.log(key, myObject[key]);
};