/* Сортировка объектов в массиве */

// const myNumbers = [ 50,23,29,108,10 ];
// console.log(myNumbers.sort((a,b) => b - a));

const inputProducts = [
    {
        title: 'Phone case',
        price: 23,
        quantity: 2,
        category: 'Accessories',
    },
    {
        title: 'Android phone',
        price: 150,
        quantity: 1,
        category: 'Phones',
    },
    {
        title: 'Headphones',
        price: 78,
        quantity: 1,
        category: 'Accessories',
    },
    {
        title: 'Sport Watch',
        price: 55,
        quantity: 2,
        category: 'Watches',
    },
];

const sortProductsByPrice = (products) => [...products].sort((a,b) => a.price - b.price);

console.log(sortProductsByPrice(inputProducts));

