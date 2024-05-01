// Funciones son reutilizables

// Declaración de la función

// function sumar (a, b) {
//     return a + b;
// }

// // Llamada a la función

// let resultado = sumar(1, 2);
// console.log(resultado);

// Expresión de la función

const sumar = function (a, b) {
    return a + b;
}

// Llamada a la función

let resultado = sumar(1, 2);
console.log(resultado);

// IIFE (Inmediately Invoked Function Expression) - Funciones que se invocan inmediatamente

(function (a, b) {
    console.log(a + b);
})(3, 4);

