const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// Forma anterior
const nombre = producto.nombreProducto;
console.log(nombre);

// Destructuring
const { nombreProducto } = producto;
console.log(nombreProducto);
const { precio } = producto;
console.log(precio);
const { disponible } = producto;
console.log(disponible);

// Destructuring en arreglos
const numeros = [10, 20, 30, 40, 50];
const [primero, segundo, tercero] = numeros;
console.log(primero);
console.log(segundo);

// Destructuring con objetos anidados
const productos = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const { informacion, informacion: { medidas, fabricacion, fabricacion: { pais } } } = productos;
console.log(informacion);
console.log(medidas);

// Destructuring con arreglos de objetos
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

const [producto1, producto2, producto3] = carrito;
console.log(producto1);

