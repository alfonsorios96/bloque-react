//Importar una funcion:
const suma = require('./suma.js');

let x = 0;

do {
   x++;
   console.log("x: " + x);
   } 
while ( x < 5 );


console.log("Hola esto es el index");

console.log('La suma 1 da: ' + suma(2,2));
console.log('La suma 1 da: ' + require('./suma.js')(3,3));