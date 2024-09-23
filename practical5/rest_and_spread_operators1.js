/* Операторы 'rest' (остаток) и 'spread' (распространение) */

const scores1 = [ 0,1.5,2.5,3.7 ];
const scores2 = [ 1.7,4.5,0,4.9,5.0,4.2 ];
const scores3 = [ 1.3,2.5,1.9 ];
const scores4 = [ 'abc',1.3,true,2.5,1.9 ];

const myFn = (...a) => {
    return console.log(a);
};

myFn(10,2,7);