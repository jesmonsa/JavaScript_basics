// Array Methods 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Bocinas', precio: 800},
    { nombre: 'Laptop', precio: 900},
];

// ForEach
meses.forEach(function(mes) {
    console.log(mes);
});

// Estrucutra de un control forEach

meses.forEach(function(mes) {
    if (mes === 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
const resultado = meses.includes('Marzo');
console.log(resultado);

const resultado2 = meses.includes('Noviembre');
console.log(resultado2);


// Some ideal para arreglos de objetos
const existe = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
});

console.log(existe);

const existe2 = carrito.some(function(producto) {
    return producto.nombre === 'Funda Celular';
});

console.log(existe2);

// Arrow Function
const existe3 = carrito.some(producto => producto.nombre === 'Celular');
console.log(existe3);

const existe4 = carrito.some(producto => producto.nombre === 'Funda Celular');
console.log(existe4);


// Reduce
const resultado3 = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);

console.log(resultado3);

// Reduce con Arrow Function
const resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado4);

// Filter
const resultado5 = carrito.filter(function(producto) {
    return producto.precio > 400;
});

console.log(resultado5);

// Filter con Arrow Function
const resultado6 = carrito.filter(producto => producto.precio > 400);
console.log(resultado6);

const resultado7 = carrito.filter(function(producto) {
    return producto.nombre === 'Celular';
});

console.log(resultado7);

const resultado8 = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular';
});

console.log(resultado8);

// Find
const resultado9 = carrito.find(function(producto) {
    return producto.nombre === 'Celular';
});

console.log(resultado9);