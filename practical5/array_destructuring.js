/* Деструктуризация массива */

const processQuantities = ([minQty,maxQty,defaultQty = 0]) => {
    console.log(minQty); // 8
    console.log(maxQty); // 29
    console.log(defaultQty); // 10 в первом вызове, 0 во втором вызове
    return defaultQty + maxQty - minQty;
}

const inputQuantities1 = [8,29,10];
console.log(processQuantities(inputQuantities1));

const inputQuantities2 = [8,29];
console.log(processQuantities(inputQuantities2));