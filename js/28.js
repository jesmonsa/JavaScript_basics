// Object constructor and obejcet literal
// POO

// Object literal
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}
producto.mostrarInfo();


// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
const producto3 = new Producto('Television 50 Pulgadas', 700);

const cliente = new Cliente('Juan', 'Herrera');

console.log(cliente);

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}


console.log(producto2);
console.log(producto3);

console.log(formatearProducto(producto2));

