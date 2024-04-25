// Orden de las operaciones en JavaScript (precedencia de operadores)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence
// https://www.w3schools.com/js/js_operators.asp
// https://www.w3schools.com/js/js_arithmetic.asp
// https://www.w3schools.com/js/js_assignment.asp
// https://www.w3schools.com/js/js_comparison.asp
// https://www.w3schools.com/js/js_logical.asp
// https://www.w3schools.com/js/js_bitwise.asp
// https://www.w3schools.com/js/js_type_conversion.asp
// https://www.w3schools.com/js/js_string_methods.asp
// https://www.w3schools.com/js/js_number_methods.asp
// https://www.w3schools.com/js/js_math.asp
// https://www.w3schools.com/js/js_random.asp
// https://www.w3schools.com/js/js_date_methods.asp
// https://www.w3schools.com/js/js_array_methods.asp
// https://www.w3schools.com/js/js_array_sort.asp
// https://www.w3schools.com/js/js_array_iteration.asp

let resultado;

resultado = 20 + 30 * 2; // 80
console.log(resultado);

resultado = (20 + 30) * 2; // 100
console.log(resultado);

resultado = (600 + 600) * 1.16; // 1392
console.log(resultado);

resultado = (100 + 200 + 300) * .2; // 120 descuento
console.log(resultado);

resultado = (100 + 200 + 300) * 1.16; // 696 con IVA
console.log(resultado);

resultado = ( 600 + 600 ) * 1.05; // 1260 comisión del 5% por pagar con tarjeta o utilizar el servicio 
console.log(resultado);

// Incrementos y decrementos

let puntaje = 10;
console.log(puntaje); // 10

puntaje++; // 11
console.log(puntaje);

puntaje--; // 10
console.log(puntaje);

puntaje += 5; // 15
console.log(puntaje);
