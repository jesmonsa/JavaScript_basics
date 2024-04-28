// Arreglos o arrays

// Crear un arreglo o array con valores numericos cuando vemos corchetes [] es un array
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros);

numeros[5] = 60; // Agregar un valor al arreglo en la posicion 5 
console.table(numeros);

// Agregar un valor al final del arreglo
numeros.push(70, 80, 90);

numeros.unshift(-10, -20, -30); // Agregar un valor al inicio del arreglo



console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

// Eliminar un elemento del final del arreglo
meses.pop();

// Eliminar un elemento del inicio del arreglo
meses.shift();

// Eliminar un elemento en una posicion especifica
meses.splice(2, 1); // Elimina el elemento en la posicion 2

// Revertir el orden del arreglo
meses.reverse();

// Encontrar un elemento en el arreglo
console.log(meses.indexOf('Mayo'));

console.log(meses);
console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Septiembre'];
console.log(nuevoArreglo);

const nuevoArreglo2 = ['Octubre', ...meses];
console.log(nuevoArreglo2);
