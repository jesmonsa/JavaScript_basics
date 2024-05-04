// Iteradores

// For Loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Par o Impar

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es Par`);
    } else {
        console.log(`${i} es Impar`);
    }
}

// For Loop con Array

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}
