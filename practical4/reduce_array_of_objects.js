/* Использование метода 'reduce' для создания массива */

const inputPosts = [
    {
        title: 'Как быстро выучить JavaScript?',
        postId: 3421,
        comment: 25,
    },
    {
        title: 'Где используется JavaScript?',
        postId: 5216,
        comment: 3,
    },
    {
        title: 'Какая разница между React и Angular?',
        postId: 8135,
        comment: 12,
    },
];

function popularPostsIds (posts,minimalComments) {
    return posts.reduce(
        (postsIds,post) => 
            post.comment >= minimalComments
            ? postsIds.concat([post.postId])
            : postsIds,
        []
    )
};

console.log(popularPostsIds(inputPosts,10));
console.log(popularPostsIds(inputPosts,15));
console.log(popularPostsIds(inputPosts,50));