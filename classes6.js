/* Проверка принадлежности свойств экземпляру объекта */

const firstComment = new Comment('First comment');

firstComment.hasOwnProperty('text'); // true
firstComment.hasOwnProperty('votesQty'); // true

firstComment.hasOwnProperty('upvote'); // false
firstComment.hasOwnProperty('hasOwnProperty'); // false

  