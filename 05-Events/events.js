const { EventEmitter } = require('events')
const evEmitter = new EventEmitter()

evEmitter.on('saySomething', (message) => {
  console.log('Eu ouvi voce no on: ', message)
}) // on serve para ouvir sempre

evEmitter.once('saySomething', (message) => {
  console.log('Eu ouvi voce no once: ', message)
}) // once serve para ouvir uma unica vez

evEmitter.emit('saySomething', 'Gabriel')
evEmitter.emit('saySomething', 'Giovanna')
evEmitter.emit('saySomething', 'Edson')