/*Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
en el arreglo) para mostrar cuántas veces aparece el nombre Maria*/


let z = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];

let contador =0;

for (let index = 0; index < z.length; index++) {
    if (z[index] === "Maria") {
        contador++
    } 
    
}
console.log("El nombre Maria esta " + contador + " veces");