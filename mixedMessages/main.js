const { setTimeout: sleep } = require('timers/promises');

const messages = [
    'Hello, World!',
    'How are you today?',
    'Goodbye!'
];

const main = async () => {
    while (true) {
        console.log(messages[Math.floor(Math.random() * messages.length)]);
        await sleep(1000);
    }
};

main();