const { EventEmitter } = require('events')
const evEmitter = new EventEmitter()

evEmitter.on('saySomething', (message) => {
  console.log('Eu ouvi voce: ', message)
})

evEmitter.emit('saySomething', 'Gabriel')