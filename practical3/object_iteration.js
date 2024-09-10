/* Итерация по свойствам объекта */

const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
};

for (let key in myObject) {
    console.log(key);    
};

