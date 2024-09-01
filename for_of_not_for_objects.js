/* for of не для объектов */

let myObject = {
    x: 10,
    y: true,
    z: 'abc',
};

for (const prop of myObject) {
    console.log(prop); 
}