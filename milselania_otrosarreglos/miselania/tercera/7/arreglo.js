/*Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de
sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como
se implementa la variable contadora */

let z = [15, 7, 9, 12, 1];
let suma = 0;

z.forEach(i => {
  suma += i;
});

console.log("La suma de los elementos del arreglo es: " + suma);