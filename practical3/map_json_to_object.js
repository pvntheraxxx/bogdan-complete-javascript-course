/* Конвертация JSON в JavaScript объекты */

const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}',
    '{"postId":2351,"commentsQuantity":8}',
];

const postsJS = postsJSON.map((post) => JSON.parse(post));

console.log(postsJS);
console.log(postsJS[1].postId); // 5131

console.log(postsJS[postsJS.length - 1].commentsQuantity);
// 8