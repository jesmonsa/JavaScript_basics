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

// >= Mayor o igual que

const efectivo2 = 1000;
const carrito2 = 1000;

if(efectivo2 >= carrito2) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}

// < Menor que

const efectivo3 = 1000;
const carrito3 = 1200;

if(efectivo3 < carrito3) {
    console.log('Fondos insuficientes');
} else {
    console.log('El usuario puede pagar');
}

// <= Menor o igual que

const efectivo4 = 1000;
const carrito4 = 1000;

if(efectivo4 <= carrito4) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
} 

const rol = 'EDITOR';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') {
    console.log('Eres editor, puedes entrar pero no puedes hacer cambios');
} else {
    console.log('No tienes acceso');
}

// if anidado

const puntaje4 = 1000;

if(puntaje4 > 1000) {
    console.log('Excelente');
} else if(puntaje4 > 500) {
    console.log('Buen puntaje');
} else {
    console.log('No tan bueno');
}

// && AND

const efectivo5 = 1000;
const carrito5 = 800;
const tarjeta = true;

if(efectivo5 > carrito5 && tarjeta) {
    console.log('Pago correcto');
} else {
    console.log('Fondos insuficientes');
} 

// || OR

const efectivo6 = 1000;
const carrito6 = 800;
const tarjeta2 = false;

if(efectivo6 > carrito6 || tarjeta2) {
    console.log('Pago correcto');
} else {
    console.log('Fondos insuficientes');
}





