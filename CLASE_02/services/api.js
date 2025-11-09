import promptSync from "prompt-sync";
const prompt = promptSync();

function checkError(error) {
  console.log("error:", error.message);
}

export function checkNumber() {
  const num = parseInt(prompt("Ingrese un numero entero: "));
  try {
    if (isNaN(num)) {
      throw new Error("El numero no es un numero valido.");
    }

    console.log(`${num} el un numero valido.`);
  } catch (error) {
    checkError(error);
  }
}

checkNumber();