/* Деструктуризация в функциях */

const userProfile = {
    name: "Sasha",
    commentsQty: 1,
    hasSignedAgreement: false,
};

const userInfo = ({ name,commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`;
    };
    return `User ${name} has ${commentsQty} comments`;
};

console.log(userInfo(userProfile)); // User Sasha has 23 comments