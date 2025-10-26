
let par = [];
let impar = [];

for (let i = 1; i < 31; i++) {
    if (i % 2 == 0) {
        par.push(i);
    } else {
        impar.push(i);
    }
    
}

console.log("Numeros pares:", par);
console.log("Numeros impares:", impar);