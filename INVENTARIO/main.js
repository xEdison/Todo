import { ingresarExistencias } from "./ingresar.js";
import { existenciasDisponibles } from "./disponibles.js";
import { esquema } from "./model.js";

esquema();


function start() {
   let inventario = {}
   while (true) {
    alert("Bienvenido al sistema de inventario de la tienda");
    const opcion = prompt("Seleccione una opción:\n1. Mostrar cantidad de productos disponibles\n2. Ingresar nuevas existencias de producto\n3. Eliminar existencias de producto");

    switch (opcion) {
      case "1":
        existenciasDisponibles(inventario);
        break;
      case "2":
        ingresarExistencias(inventario);
        break;
      case "3":
        eliminarExistencias(inventario);

     
        return;
      default:
        alert("Opción inválida");
        break;
    }
  }
}





start();