//esta función solo, muestra la cantidad de arroz disponible
//SE DEBE IMPLEMENTAR PARA QUE MUESTRE TODAS LAS EXISTENCIAS
//DISPONIBLES DE TODOS LOS PRODUCTOS 
function existenciasDisponibles() {
    return localStorage.getItem("arroz");
    return localStorage.getItem("frijoles");
    return localStorage.getItem("lentejas");
    return localStorage.getItem("jabon");
    return localStorage.getItem("limpido");
    return localStorage.getItem("champu");
    return localStorage.getItem("pescado");
    return localStorage.getItem("res");
    return localStorage.getItem("cerdo");
}



export {existenciasDisponibles};