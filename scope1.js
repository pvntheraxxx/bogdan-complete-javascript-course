/* Цепочка областей видимости */

const a = 5;

function myFn() {
    function innerFn() {
        console.log(a);
    }
    innerFn();
}

myFn();