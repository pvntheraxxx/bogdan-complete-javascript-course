/* Значения параметров функции по умолчанию */

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: "Sasha",
}

console.log(newPost(firstPost));