// Modulos nativos
const path = require('path');

console.log(path.basename(__filename));


// Meus modilos (personalizados)
const myModule = require('./exports.js');
console.log(myModule);