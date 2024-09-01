const myCity = {
    city: "New York",
    popular: true,
    country: "USA"
};
console.log(myCity);

delete myCity.country;
console.log(myCity);
// {city: "New York", popular:true}