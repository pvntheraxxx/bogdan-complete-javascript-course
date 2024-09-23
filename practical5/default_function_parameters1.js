/* Параметры функции по умолчанию */

// const weatherForecast = (city,weather) => {
//     weather = weather !== undefined ? weather : 'Отличная погода!';
//     return `Прогноз погоды для города ${city}: ${weather}`
// };

const weatherForecast = (city,weather = 'Отличная погода!') => {
    return `Прогноз погоды для города ${city}: ${weather}`
};

console.log(weatherForecast('Dubai','Солнечно'));
console.log(weatherForecast('London','Небольшой дождь'));
console.log(weatherForecast('Paris'));
console.log(weatherForecast('Miami',''));
console.log(weatherForecast('Las Vegas', undefined))