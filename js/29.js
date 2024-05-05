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

    precioProducto() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
const producto3 = new Producto('Television 50 Pulgadas', 700);

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

    
}

const libro = new Libro('JavaScript la Revolución', 120, '123456');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());