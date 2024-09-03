/* Создание нескольких экземпляров */

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
};

const firstComment = new Comment('First comment');
const secondComment = new Comment('Second comment');
const thirdComment = new Comment('Third comment'); 