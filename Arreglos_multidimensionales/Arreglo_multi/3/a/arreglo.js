arreglo = [[2, 8, 9], [30, 71, 77], [11, 990, 41]];

arreglo.forEach(function(elementoExterno) {
  elementoExterno.forEach(function(elementoInterno) {
    if (elementoInterno % 2 !== 0) {
      console.log(elementoInterno);
    }
  });
});