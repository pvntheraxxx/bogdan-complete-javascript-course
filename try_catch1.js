/* Try...Catch */

const fnWithError = () => {
    throw new Error("Some error");
};

try {
    fnWithError()
} catch (error) {
    console.log(error);
    console.log(error.message);
}

console.log("Continue...");