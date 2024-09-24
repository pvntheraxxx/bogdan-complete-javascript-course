/* Удаление свойств объекта */

let person = {
    _id: '5ad8cefcc0971792dacb3f1f',
    index: 4,
    processed: false,
    cart: ['item1','item2','item3'],
    email: 'slarsent@test.com',
    name: 'Samanta Larsen',
    cartId: 435,
};

// delete person._id;
// delete person.processed;
// delete person.cart;

const { _id,processed,cart, ...person2 } = person; 

console.log(person);
console.log(person2);