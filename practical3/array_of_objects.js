/* Массив объектов */

const myCarOne = {
    carBrand: "Tesla",
    price: 500,
    isAvailableForSale: true,
};

const myCarTwo = {
    carBrand: "Toyota",
    price: 350,
    isAvailableForSale: false,
};

const myCarThree = {
    carBrand: "Bugatti",
    price: 10000,
    isAvailableForSale: true,
};

const myCarFour = {
    carBrand: "Lambo",
    price: 9000,
    isAvailableForSale: false,
};

const cars = [ myCarOne,myCarTwo,myCarThree ];
cars.push(myCarFour);

console.log(cars);
console.log(cars.length);