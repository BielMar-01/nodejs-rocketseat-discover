// Lista de argumentos
// console.log(process.argv);

// Pirmeiro jeito de passar o outro jeito é em flags (--name)
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Seu nome é ${firstName} ${lastName}`);