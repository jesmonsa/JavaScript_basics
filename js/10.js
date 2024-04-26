// Objetos 

// const nombreProducto = "Monitor de 20 pulgadas";
// const precio = 300;
// const disponible = true;

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}



// console.log(producto.nombreProducto); // Monitor de 20 pulgadas
// console.log(producto.precio); // 300
// console.log(producto.disponible); // true

// console.log(producto["nombreProducto"]); // Monitor de 20 pulgadas
// console.log(producto["precio"]); // 300
// console.log(producto["disponible"]); // true

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

console.log(producto); // { nombreProducto: 'Monitor de 20 pulgadas', precio: 300, disponible: true, imagen: 'imagen.jpg' }

// Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto); // { nombreProducto: 'Monitor de 20 pulgadas', precio: 300, imagen: 'imagen.jpg' }
