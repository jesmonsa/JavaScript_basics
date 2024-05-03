// Estructuras de control 

// if

const puntaje = 1000;

if(puntaje == 1000) {
    console.log('Si es igual');
} else {
    console.log('No es igual');
} 

// == Revisa el valor
// === Revisa el valor y el tipo de dato

const puntaje2 = '1000';

if(puntaje2 === 1000) {
    console.log('Si es igual');
} else {
    console.log('No es igual');
}

// != Revisa si es diferente
// !== Revisa si es diferente en valor y tipo de dato

const puntaje3 = 1000;

if(puntaje3 !== 1000) {
    console.log('Si es igual');
} else {
    console.log('No es igual');
}

// > Mayor que

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}


