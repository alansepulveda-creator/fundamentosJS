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
else{alert(`Es menor de edad`)}
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


// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
let notas = 6.0
let nombre = "Alan"
if(notas >= 6.0)alert(`El estudiante ${nombre} tiene un excelente rendimiento`)
else if(notas >= 4.0)alert(`El estudiante ${nombre} esta aprobado`)
else{alert(`El estudiante ${nombre} esta reprobado`)}
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
let nombre = "Alan Sepúlveda"
alert(`El nombre convertido es: ${nombre.toUpperCase()} y tiene ${nombre.length} caracteres`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo = "its n0ir@gmail.com"
if(correo.length > 15)alert(`El correo convertido es: ${correo.toLowerCase()} y el resultado es: "correo válido"`)
else{alert(`El correo convertido es: ${correo.toLowerCase()} y el resultado es: "correo demasiado corto"`)}
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase = "Estoy aprendiendo JavaScript"
if(frase.length > 20) {
alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase larga`)
} else if(frase.length <= 20 & frase.length > 10) {
alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase mediana`)
} else {
alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase corta`)
}
}

// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
let producto = "TECLADO"
let precio = 50000
let descuento = 0.1
alert(`El producto ${producto} tiene un precio final de $${precio - (precio * descuento)}`)
}