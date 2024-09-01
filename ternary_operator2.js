/* Тернарный оператор */

const value1 = 11;
const value2 = 25;

value1 && value2
? myFunction1(value1,value2)
: myFunction2();

function myFunction1(value1,value2) {
    return console.log("values: ",value1,value2);
};

function myFunction2() {
    return console.log("false");
};

// 0, null, undefined => false