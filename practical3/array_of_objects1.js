/* Массив объектов */

const newCar = {
    carBrand: "Tesla",
    price: 20000,
    isAvailableForSale: false,
};

const cars = [
    {
        carBrand: "Toyota",
        price: 300,
        isAvailableForSale: true,
    },
    {
        carBrand: "BMW",
        price: 12000,
        isAvailableForSale: false,
    },
    {
        carBrand: "Honda",
        price: 8000,
        isAvailableForSale: true,
        newProperty: 10,
    },
];
cars.push(newCar);

console.log(cars);
console.log(cars.length); // 4

console.log(cars[0]); // { carBrand: 'Toyota', price: 300, isAvailableForSale: true }
console.log(cars[3]); // { carBrand: 'Tesla', price: 20000, isAvailableForSale: false }
