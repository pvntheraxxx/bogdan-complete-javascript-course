/* Деструктуризация объектов */

const userProfile = {
    firstName: "Sasha",
    commentQty: 23,
    hasSignedAgreement: false,
};

const { firstName, commentQty } = userProfile;
const { hasSignedAgreement } = userProfile;

console.log(firstName); // Sasha
console.log(commentQty); // 23