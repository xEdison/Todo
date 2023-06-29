/*Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable
contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo.
Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa
la variable contadora.
 */

let z = [true, true, false, true, false, false];
let contador = 0;
let contador2 = 0;

while (contador2 < z.length) {
    if (z[contador2] === false) {
        contador++;
    }
    contador2++;
}

console.log("False aparece " + contador + " veces en el arreglo.");




