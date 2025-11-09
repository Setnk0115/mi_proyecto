const readlineSync = require("readline-sync");

const email = readlineSync.question("Ingrese su correo electronico: ");

if (!email || typeof email !== "string") {
  console.log("El correo esta vacio o no es valido.");
} else {
  const re = /\S+@\S+\.\S+/;
  if (re.test(email)) {
    console.log("El correo tiene un formato valido.");
  } else {
    console.log("El correo no tiene un formato valido.");
  }
}
