/* Что происходит в случае ошибок */

const fnWithError = () => {
    throw new Error("Some error");
};

fnWithError(); // Выполнение кода остановится после появления Uncaught ошибки
console.log("Continue...");