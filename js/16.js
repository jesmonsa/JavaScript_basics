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


