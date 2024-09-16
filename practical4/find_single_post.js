/* Поиск объектов в массиве */

const posts = [
    { postId: 1355, commentsQuantuty: 5 },
    { postId: 5131, commentsQuantuty: 13 },
    { postId: 6134, commentsQuantuty: 2 },
];

const findPostById = (postId,posts) => {
    return posts.find(post => post.postId === postId);
};

console.log(findPostById(6134, posts));
// { postId: 6134, commentsQuantuty: 2 }

console.log(findPostById(4511,posts)); 
// undefined