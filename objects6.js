const myCity = {
    city: "New York",
    info: {
        isPopular: true,
        country: "USA"
    }
}

console.log(myCity.info.isPopular); 
// true

// delete myCity.info['isPopular'];

console.log(myCity);
// {city: 'New York', info: {country: "USA"}}

console.log(myCity.info.isPopular);
console.log(myCity.city);

console.log(myCity.info['country']);
console.log(myCity['city'])