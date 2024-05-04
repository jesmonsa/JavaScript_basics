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

// While Loop

let i = 1; // Inicializar el While Loop

while (i < 10) { // Condicion del While Loop
    if (i % 2 === 0) {
        console.log(`${i} es Par`);
    } else {
        console.log(`${i} es Impar`);
    }
    i++;
}

// While Loop con Array

let j = 0; // Inicializar el While Loop

while (j < carrito.length) { // Condicion del While Loop
    console.log(carrito[j].nombre);
    j++;
}

// Do While Loop

let k = 0; // Inicializar el Do While Loop

do {
    console.log(k);
    k++;
} while (k < 10); // Condicion del Do While Loop

// Do While Loop con Array

let l = 0; // Inicializar el Do While Loop

do {
    console.log(carrito[l].nombre);
    l++;
} while (l < carrito.length); // Condicion del Do While Loop


