/* Использование метода "reduce" для создания объекта */

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

function quantitiesByCategories (products) {
    return products.reduce((acc,product) => {
        // Если категории ещё нет в объекте, добавляем её с начальным значением 0
        if (!acc[product.category]) {
            acc[product.category] = 0;
        }

        // Добавляем количество к соответствующей категории
        acc[product.category] += product.quantity;
        return acc;
    },{});
}

console.log(quantitiesByCategories(inputProducts))

/* {
    Accessories: 3,
    Phones: 1,
    Watches: 2
}
*/