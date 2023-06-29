/* Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
arreglos para ver cómo se implementa la variable contadora */

let z = [-2, 8, 99, 1, 7];

let suma = 0;

z.forEach(i => {
  suma += i * i;
});

console.log("La suma de los cuadrados del arreglo es: " + suma);