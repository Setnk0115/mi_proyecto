
const repuesta = require("readline-sync");

let numero = repuesta.questionInt("Digite un numero: ");


if (numero % 2 === 0) {
  console.log(`El número ${numero} es PAR`);
} else {
  console.log(`El número ${numero} es IMPAR`);
}