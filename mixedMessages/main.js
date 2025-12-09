const messages = [
    'Hello, World!',
    'How are you today?',
    'Goodbye!'
];

const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];

console.log(randomMessage);