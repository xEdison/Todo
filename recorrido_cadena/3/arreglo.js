let cadena = "Javascript es genial";
let contador = 1;

for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === " " && cadena[i + 1] !== " ") {
        contador++;
    }
}

console.log("La cadena está compuesta por " + contador + " palabras.");