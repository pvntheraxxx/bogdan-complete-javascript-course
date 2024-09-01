const myCity = {
    city: "New York"
};
console.log("First: ", myCity);


myCity['popular'] = true;
console.log("Second: ", myCity);
// {city: "New York", popular: true}

const countryPropertyName = 'country';
myCity[countryPropertyName] = 'USA';
console.log("Third: ", myCity);
// {city: "New York", popular: true, country: 'USA'}

myCity['airports'] = true;
console.log("Are there airports? ", myCity.airports);