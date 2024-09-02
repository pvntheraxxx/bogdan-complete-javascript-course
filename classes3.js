/* Проверка принадлежности классу */

class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    };
    upvote() {
        this.votesQty += 1;
    };
};

const firstComment = new Comment('First comment');

console.log(firstComment instanceof Comment); // true
console.log(firstComment instanceof Object); // true