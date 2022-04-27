const { EventEmitter } = require('events')
const evEmitter = new EventEmitter()

evEmitter.emit('saySomething')
evEmitter.emit('saySomething')