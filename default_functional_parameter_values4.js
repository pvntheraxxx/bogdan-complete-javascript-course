/* Функция с явным возвратом объекта */


function newPost(post, addedAt = Date()) {
    return console.log(post, addedAt);
}

const firstPost = {
    id: 1,
    author: "Sasha",
};

newPost(firstPost);