/* Классы */

class Fruit {
    constructor (title,price) {
        this.title = title;
        this.price = price;
    };
    priceInfo () {
        return `Price of the ${this.title} is ${this.price}$`;
    };
};

const apple = new Fruit('Apple',2);
console.log(apple.priceInfo());

const orange = new Fruit('Orange',3);
console.log(orange.priceInfo());