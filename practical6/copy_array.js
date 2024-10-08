/* Копия массива */

const a = [ 1,2,3 ];

const arrayCopy = [];
for (let i = 0; i < a.length; i += 1) {
  arrayCopy[i] = a[i];
};

console.log('original array: ', a);
console.log('copy array: ', arrayCopy);