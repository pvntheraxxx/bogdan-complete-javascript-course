/* Итерация по свойствам объекта */

const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
};

const objectKeys = Object.keys(myObject); // массив ключей
// Object.keys() возвращает массив ключей-свойств объекта

objectKeys.forEach((key) => {
    if (key === 'key1' || key === 'key3') {
        console.log(myObject[key]);
    };
});
