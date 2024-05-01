// Metodos y funciones

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); // Convierte un string a un numero
console.log(numero1.toString()); // Convierte un numero a un string

const pedido = "Pizza, Hamburguesa, Agua, Refresco";
const pedidos = pedido.split(", "); // Convierte un string a un array
console.log(pedidos);

const datos = "Nombre, Apellido, Correo";
const datosArray = datos.split(", ");
console.log(datosArray);

const producto = "Pizza";
console.log(producto.toUpperCase()); // Convierte a mayúsculas
console.log(producto.toLowerCase()); // Convierte a minúsculas

