const events = require('events');
const emitter = new events.EventEmitter();

emitter.once('fire', () => {
    console.log(`Event fired!`);
});

emitter.emit('fire');
emitter.emit('fire');
console.log('Hello');