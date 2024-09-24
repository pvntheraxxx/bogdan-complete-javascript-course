/* Расширение массивов */

class ExtendedArray extends Array {
    sum () {
        return this.reduce((sum,num) => sum + num, 0);    
    };
    onlyNumbers () {
        return this.filter((el) => typeof el === 'number');  
    };
};

// const myExtendedArray = [10,4,5]; 
// создание экземпляра массива Array

const myExtendedArray = new ExtendedArray(10,4,5);

console.log(myExtendedArray);
console.log(myExtendedArray.sum());

const myExtendedArray2 = new ExtendedArray('abc',5,true,25)
console.log(myExtendedArray2.onlyNumbers());

myExtendedArray2.forEach((num) => console.log(num));