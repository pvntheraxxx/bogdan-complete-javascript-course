/* async/await */

const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
};
 
const url = 'https://jsonplaceholder.typicode.com/todos/';
const data = await getData(url); 