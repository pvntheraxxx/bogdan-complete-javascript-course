function a() {
    console.log("Hi There");
};
a(); // Hi There
a = 10; // Error
a(); // Uncaught TypeError: a is not function

/*
Здесь вся суть состоит в том,
что мы поменяли значение функции на 
значение переменной. 
Т.е. функция стала переменной
*/