/* Перебор элементов массива */

const myCities = [ 'London','New York','Singapore' ];

const cityInfo = ({city,index}) => {
    return `${city} is the index ${index} in the myCities array`;
};

myCities.forEach((city,index) => 
console.log(cityInfo({city,index})));

// Порядок следования свойств в объекте не имеет значения
