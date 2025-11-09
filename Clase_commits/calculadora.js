const readlineSync = require("readline-sync");

const numero1 = readlineSync.questionFloat("Digite el primer numero: ");
const numero2 = readlineSync.questionFloat("Digite el segundo numero: ");

const resultado = numero1 + numero2;

console.log(`La suma de ${numero1} + ${numero2} es = ${resultado}`);