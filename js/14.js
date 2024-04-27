// Arreglos o arrays

// Crear un arreglo o array con valores numericos cuando vemos corchetes [] es un array
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

console.log(meses);
console.table(meses);

// Un arreglo que contiene datos de todo tipo
const deTodo = ['Hola', 10, true, 'si', null, {nombre: 'Juan', trabajo: 'Programador'}, [1, 2, 3]];

console.log(deTodo);
console.table(deTodo);

// Acceder a los valores de un arreglo
console.log(numeros[2]); // 30 // Los arreglos empiezan en 01
console.log(numeros[0]); // 10  // Los arreglos empiezan en 01

console.log(meses[2]); // Marzo
console.log(meses[0]); // Enero

// Conocer la extension de un arreglo
console.log(meses.length); // 4
console.log(deTodo.length); // 7

// Iterar un arreglo
meses.forEach(function(mes) {
  console.log(mes);
});

numeros.forEach(function(numero) {
  console.log(numero);
});
