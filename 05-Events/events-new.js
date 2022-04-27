const { inherits } = require('util') // Vai hedar
const {EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('OH! E agora, quem poderá me defender?')
chapolin.emit('help')