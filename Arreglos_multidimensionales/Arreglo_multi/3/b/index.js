var arreglo = [[2, 8, 9], [30, 71, 77], [11, 990, 41]];

var suma = 0;

arreglo.forEach(function(elementoExterno) {
  elementoExterno.forEach(function(elementoInterno) {
    suma += elementoInterno;
  });
});

console.log("La suma de los elementos es: " + suma);