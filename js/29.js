// Classes en Js 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
const producto3 = new Producto('Television 50 Pulgadas', 700);

console.log(producto2);
console.log(producto3);