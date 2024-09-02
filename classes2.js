/* Создание экземпляра класса */

class Comment {
    constructor(text) {
        this.text = text;
        this.text = 0;
    };
    upvote() {
        this.voteQty += 1;
    };
};

const firstComment = new Comment('First comment');
console.log(firstComment);