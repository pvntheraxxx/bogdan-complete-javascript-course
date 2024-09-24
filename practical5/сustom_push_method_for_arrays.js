/* Модифицированный метод push для массивов */

class CustomArray extends Array {
    customPush (newElement) {
        console.log(this.length);
        this[this.length] = newElement;
        console.log(this.length);
        console.log(`Новый элемент ${newElement} был только что добавлен в массив`);
    };
};

const myCustomArray = new CustomArray(10,3,7,5);

myCustomArray.customPush(25);
console.log(myCustomArray);

myCustomArray.push(30);
console.log(myCustomArray);