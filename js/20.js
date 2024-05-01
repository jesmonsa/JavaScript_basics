// Funciones que retornan valores 

// function sumar(a, b) {
//     return a + b;
// }

// let resultado = sumar(1, 2);
// console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

console.log(total); // 1000

const totalPagar = calcularImpuesto(total);

console.log(`Total a pagar con impuestos: ${totalPagar}`); // 1150


