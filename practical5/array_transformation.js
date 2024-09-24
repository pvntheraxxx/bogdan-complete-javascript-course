/* Трансформация массива объектов */

const testPosts = [
    {
        postId: 234,
        author: 'robd',
        commentsQty: 5,
    },
    {
        postId: 823,
        author: 'sady',
    },
    {
        postId: 161,
        author: 'merryl',
        commentsQty: 8,
    }
];

const processPosts = (posts) => {
    return posts.map((post) => {
        const { postId,author:postAuthor,commentsQty:postCommentsQty = 0 } = post;
        return {
            postAuthor,
            postCommentsQty,
            postId: postId + 1000,
        }
    })
};

/*
const processPosts = (posts) => {
    return posts.map((post) => {
        const { postId,author:postAuthor,commentsQty:postCommentsQty = 0 } = post;
        return {
            postId: post.postId + 1000,
            postAuthor,
            postCommentsQty: post.commentsQty === undefined ? 0 : post.commentsQty,
        }
    })
};
 */



const processedPosts = processPosts(testPosts);
console.log(processedPosts);