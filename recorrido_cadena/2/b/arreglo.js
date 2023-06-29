let cadena = "foifhoefuooo";
let contador = 0;

for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "o") {
        contador++;
    }
}

console.log("La letra 'o' aparece " + contador + " veces en la cadena.");