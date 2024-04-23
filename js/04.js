// String o cadena de texto

const producto = "Monitor 20 Pulgadas";
const producto2 = String('Monitor 30 Pulgadas'); // Esta es otra forma de crear un string
const producto3 = new String('Monitor 50 Pulgadas'); // Este es un objeto, no un string
const producto4 = "Monitor 20\" Pulgadas"; // Para usar comillas dobles dentro de un string, se usa el backslash
const producto5 = 'Monitor HD"'; // 
const tweet = 'Aprendiendo JavaScript con el curso de desarrollo web completo'; //

console.log(producto);
console.log(producto2);
console.log(producto3); // Este es un objeto, no un string
console.log(producto4); // Para usar comillas dobles dentro de un string, se usa el backslash
console.log(producto5.length); // Para saber la longitud de un string, se usa la propiedad length
console.log(tweet.length); // Para saber la longitud de un string, se usa la propiedad length
const email = 'correo@correo.com';

// IndexOf (Para saber la posicion de una palabra en un string)
console.log(tweet.indexOf('JavaScript')); // Para saber la posicion de una palabra en un string, se usa indexOf
console.log(tweet.indexOf('PHP')); // Si no encuentra la palabra, regresa -1
console.log(email.indexOf('@')); // Para saber la posicion de una palabra en un string, se usa indexOf

// Includes (Para saber si una palabra esta en un string)
console.log(tweet.includes('JavaScript')); // Para saber si una palabra esta en un string, se usa includes
console.log(tweet.includes('PHP')); // Si no encuentra la palabra, regresa false


