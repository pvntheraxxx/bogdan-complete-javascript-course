const myCity = {
    city: "New York",
    popular: true,
    country: "USA"
}

const myCityTest = {
    popular: true,
    country: "USA",
    city: "New York"
}

console.log(myCity.city);
console.log(myCity.popular);

myCity.city = "Las Vegas";
console.log(myCity.city);