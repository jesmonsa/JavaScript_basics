// "use strict";

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// Object.freeze(producto); // No se puede modificar el objeto ni agregar ni eliminar propiedades

// // Agragar nuevas propiedades
// producto.imagen = 'imagen.jpg';

// console.log(Object.isFrozen(producto));

// console.log(producto);

Object.seal(producto); // No se puede agregar ni eliminar propiedades, pero si modificar las existentes

// Agragar nuevas propiedades
producto.imagen = 'imagen.jpg';

console.log(Object.isSealed(producto));

console.log(producto);