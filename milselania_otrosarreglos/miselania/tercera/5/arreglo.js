/*Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para
mostrar si el nombre Juan se encuentra dentro del arreglo */

let z = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];

for (let index = 0; index < z.length; index++) {
    
    if (z.includes ("Juan")) {
        console.log("El nombre Juan si esta en el arreglo");
        
    } else {
        console.log("El nombre Juan no esta en el arreglo");
        
    }
}
