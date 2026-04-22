console.log("conexion exitosa con js")

//tipos de datos numericos

//1 - declaracion de numeros(creacion de variables numericas)

let edad = 31;
let temperatura = -5;
let precio = 19990;
let precio = 3.1416;
let descuento = 0.25;

//operaciones basicas
let resta = 10 - 5; //5
let suma = 10 + 5; //15
let multiplicacion = 10 * 5; //50
let division = 10 / 2; //5
let modulo = 10 % 3; //1
let potencia = 2 ** 3 //8

//3 - incremento y decremento
let numero = 10;
numero++; //11
numero--; //9

//4 - numeros con decimales
let promedio = 6.5;
let altura = 1.67;
let peso = 90.3;

//5 numeros grandes y notacion cientifica
let poblacion =1e6; //1000000
console.log("numero grande 1e6: " + poblacion);
let numeropequeno = 5e-3 //0.005
console.log("numero pequeño 5e-3: " + numeropequeno);

//6 - operaciones combinadas
//calculo de precios
let precioproducto = 10000
let iva = 0.19;
let total = precioproducto + (precioproducto + iva);//11900

//calculo de valor de hora trabajada
let horas = 40;
let valorhora = 12000;
let sueldo = horas + valorhora;
console.log("el sueldo base es:" +sueldo)

//7 - redondeo de numeros
console.log("redondeando 4.6: " + Math.round(4.6)); //5
console.log("redondeando 4.6: " + Math.floor(4.6)); //4