/* Параметры функции по умолчанию */

function weatherForecast (city,weather) {
    if (weather === '') {
        return `Прогноз погоды для города ${city}:`
    } else if (!weather) {
        return `Прогноз погоды для города ${city}: Отличная погода!`;
    } else {
        return `Прогноз погоды для города ${city}: ${weather}`;
    }
};

console.log(weatherForecast('Dubai','Солнечно'));
console.log(weatherForecast('London','Небольшой дождь'));
console.log(weatherForecast('Paris'));
console.log(weatherForecast('Miami',''));
console.log(weatherForecast('Las Vegas', undefined))