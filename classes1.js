/* Создание экземпляров класса */

class Comment {
    constructor(text) {
        this.text = text;
        this.voteQty = 0;
    }
    upvote() {
        this.voteQty += 1;
    }
};

const firstComment = new Comment("First comment");