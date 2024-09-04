/* Статические методы */

class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    };
    upvote() {
        this.votesQty += 1;
    };
    static mergeComment(first,second) {
        return `${first} ${second}`;
    };
};

Comment.mergeComment('First comment.', 'Second comment.');