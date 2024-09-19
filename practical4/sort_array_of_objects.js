/* Сортировка объектов в массиве */

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

function sortProductsByPrice (products) {
    return products.sort((a,b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          // a должно быть равным b
          return 0; 
    })
};

console.log(sortProductsByPrice(inputProducts))