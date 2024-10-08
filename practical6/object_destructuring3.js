/* Деструктуризация объекта */

const person1 = {
    name: 'Mike',
    info: {
        country: 'Spain',
        age: 23,
    },
    postsQuantity: 100,
};

const person2 = {
    name: 'Alice',
    info: {
        country: 'Spain',
        age: 23,
    },
};

const shortPerson = ({
    name: n, 
    info: {country:c, age:a}, 
    postsQuantity: p = 0 
}) => {        
    return {
        n,
        c,
        a,
        p,
    };
};

console.log(shortPerson(person1));
console.log(shortPerson(person2));
