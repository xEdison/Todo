/*3. Use splice para hacer las eliminaciones correspondientes:
a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el
índice 4 en un sólo
llamado
e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en
un sólo
llamado*/

arreglo = [1, 2, false]

arreglo.splice(2, 1)
console.log(arreglo);

arreglo1 = [99, false, 17, 45, 7, "abc", 78];
arreglo1.splice(6, 1);

console.log(arreglo1);

arreglo2 = [-1, -55, -89, -30, 1000];
arreglo2.splice(1, 1);

console.log(arreglo2);

arreglo3 = ["zxc", 767, 1298, true, false, [3], 1];
arreglo3.splice(1, 4);

console.log(arreglo3);

arreglo4 = [34, ["q"], 67, 1, 99, 1 / 2];
arreglo4.splice(3, 2);

console.log(arreglo4);