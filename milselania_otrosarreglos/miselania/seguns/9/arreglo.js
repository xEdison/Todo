let z = ["a", "b", "c", "d", "e", "f", "g"];

function arreglo(letra) {
    for (let i = 0; i < z.length; i++) {
        if (letra === z[i]) {
            return "La letra ingresada corresponde a la cadena.";
        }
    }
    return "La letra ingresada no corresponde a la cadena.";
}

let letraIngresada = prompt("Ingrese una letra del alfabeto");
console.log(arreglo(letraIngresada));