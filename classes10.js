/* Расширение других классов */

class NumbersArray extends Array {
    sum() {
        return this.reduce((el,acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray (2,5,7);

console.log(myArray);
console.log(myArray.sum());