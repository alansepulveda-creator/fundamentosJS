console.log("conexion exitosa con js...")

function ejercicio1() {
let nombre = "Alan";
alert(`Bienvenido ${nombre}`)
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
let suma = 7
let suma1 = 8
alert(`La suma es: ${suma + suma1}`)
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
let resta = 17
let resta1 = 5
alert(`La resta es: ${resta - resta1}`)
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
let mult = 6
let multi = 4
alert(`La multiplicacion es: ${mult * multi}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
let nota =  5.6
let nota1 = 4.5
let nota2 = 7.0
let total = 3;
alert(`El promedio es ${(nota + nota1 + nota2) / total}`)
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
let edad = 19
if(edad > 18)alert(`Es mayor de edad`)
else{(`Es menor de edad`)}
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
let numeru = 6
if(numeru % 2 == 0)alert(`El numero es par`)
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
let not = 5.0
if(not >= 5.0)alert(`Estudiante aprobado`)
else{alert(`estudiante reprobado`)}
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
let precio = 20000
let descuento = 0.1
alert(`Precio final con descuento: $${precio - (precio * descuento)}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
let num1 = 15
let num2 = 22
let num3 = 8
if(num1 > num2 & num1 > num3)alert(`El número mayor es: ${num1}`)
else{alert(`El número mayor es: ${num2}`)}
}