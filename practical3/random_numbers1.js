/* Случайные числа */

const MIN = 1000;
const MAX = 9999;

// const MIN = 1;
// const MAX = 10;

const myNumbers = [ 2355,7235,8135,1762,2361,8351 ];
// const myNumbers = [ 1,3,5,7,9,10 ] 

const randomNumber = ( min,max ) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const addRandomNumberToArray = ( arr,min,max ) => {
    let newRandomNumber;
    const updatedArr = [ ...arr ]; // создаём копию массива arrs
    
    do {
        newRandomNumber = randomNumber(min,max);
        console.log(newRandomNumber);
    } while (updatedArr.includes(newRandomNumber));

    updatedArr.push(newRandomNumber);
    return updatedArr; 
};

const updatedArray = addRandomNumberToArray(myNumbers,MIN,MAX);
console.log(`\n` + 'UPDATED ARRAY ' + updatedArray + `\n`);
console.log('ORIGINAL ARRAY ' + myNumbers + `\n`);
