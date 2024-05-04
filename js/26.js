// forEach y map para recorrer arreglos

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Bocinas', precio: 800 },
    { nombre: 'Laptop', precio: 900 }
];

// forEach

carrito.forEach(producto => console.log(producto.nombre));

// map

const arreglo2 = carrito.map(producto => producto.nombre);
console.log(arreglo2);

// ForEach y Map con Objetos

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}

Object.keys(persona).forEach(key => {
    console.log(key);
});

Object.values(persona).forEach(value => {
    console.log(value);
});


