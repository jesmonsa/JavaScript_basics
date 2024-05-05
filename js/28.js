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

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}


// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// Prototype
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
const producto3 = new Producto('Television 50 Pulgadas', 700);
const cliente = new Cliente('Juan', 'Herrera');
const cliente2 = new Cliente('Karen', 'Herrera');

console.log(cliente.formatearCliente());
console.log(cliente2.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());






