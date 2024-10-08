/* Шаблонные строки */

const cars = [
    { brand: 'Honda', price: 13000 },
    { brand: 'Rolls-Royce', price: 120000 },
];

function carInfo (car) {
    return `Цена автомобиля ${car.brand} - ${car.price}$ и это ${
        car.price > 20000 ? 'дорогая' : 'дешёвая'} машина.`;
};

cars.forEach((car) => console.log(carInfo(car)));