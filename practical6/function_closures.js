/* Замыкания */

const createGreeting = () => {
    let greetingString = 'Hey, this is';

    function greet (name) {
        return `${greetingString} ${name}`;
    };

    function changeGreeting (newGreeting) {
        greetingString = newGreeting
    };

    return {
        greet,
        changeGreeting,
    };
};

const greeting1 = createGreeting();
console.log(greeting1.greet('Bob'));

greeting1.changeGreeting('Good morning from');
console.log(greeting1.greet('Emily'));

greeting1.changeGreeting('Good evening ');
console.log(greeting1.greet('Emily'));