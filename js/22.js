// Arrow function

const sumar = (a, b) => a + b;  // Arrow function
console.log(sumar(2, 3));  // 5

const aprendiendo = (tecnologia) => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo('JavaScript'));  // Aprendiendo JavaScript

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

// forEach
meses.forEach((mes) => {
    if (mes === 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Some (ideal para arreglos de objetos) - retorna true o false
const existe = carrito.some((producto) => producto.nombre === 'Celular');
console.log(existe);  // true

// Reduce - ideal para arreglos de objetos - retorna un valor acumulado (suma, resta, etc) - 0 es el valor inicial del acumulador (total) 
const resultado2 = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado2);  // 2200

// Filter - ideal para arreglos de objetos - retorna un nuevo arreglo con los elementos que cumplan la condición (precio > 400)
const resultado3 = carrito.filter((producto) => producto.precio > 400);
console.log(resultado3);

// Find - ideal para arreglos de objetos - retorna el primer elemento que cumpla la condición (nombre === 'Celular')
const resultado4 = carrito.find((producto) => producto.nombre === 'Celular');
console.log(resultado4);

// Map - ideal para arreglos de objetos - retorna un nuevo arreglo con los elementos que cumplan la condición (nombre)
const resultado5 = carrito.map((producto) => producto.nombre);
console.log(resultado5);

// Iterators - for of - ideal para arreglos de objetos - recorre los elementos del arreglo (meses, carrito) - no se puede usar con objetos (carrito)
for (let mes of meses) {
    console.log(mes);
}

for (let producto of carrito) {
    console.log(producto.nombre);
}





