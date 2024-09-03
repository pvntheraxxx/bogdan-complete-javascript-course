/* Вызов унаследованных методов */

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

firstComment.upvote();
console.log(firstComment.votesQty); // 1

firstComment.upvote();
console.log(firstComment.votesQty); // 2