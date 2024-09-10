function leerNumero() {
    while (true) {
        let userNumero = parseInt(prompt("Ingrese un número para adivinar, entre 1 y 100"));

        if (userNumero < 1 || userNumero > 100 || isNaN(userNumero)) {
            alert("Ingrese un número válido");
            continue;
        } else {
            return userNumero; // Return corta el ciclo While
        }
    }
}

function comprobarValor(num, numCorrecto) {
    if (num === numCorrecto) {
        return 0;
    } else if (num > numCorrecto) {
        return 1;
    } else {
        return -1;
    }
}

let numeroRandom = Math.round(Math.random() * 100) + 1;
let resultado = -1

alert("Adivina el número entre 1 y 100");

while (resultado !== 0) {
    let numeroUser = leerNumero();
    resultado = comprobarValor(numeroUser, numeroRandom);

    if (resultado === 0) {
        console.log("Los números ingresados son iguales");
    } else if (resultado === 1) {
        console.log(`El número del usuario "${numeroUser}" es mayor al número correcto`);
    } else {
        console.log(`El número del usuario "${numeroUser}" es menor al número correcto`);
    }
}

console.log("Fin del juego");