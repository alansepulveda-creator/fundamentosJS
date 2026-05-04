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

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)



// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

function ejercicio16() {
let nombre = "picolo"
let producto1 ="pepinillo"  
let precio$ = 300000
if(precio$ >= 100000){
alert(`el Cliente ${nombre.toUpperCase()} es un Cliente Premium por lo que el valor original de su ${producto1.toLowerCase()}: $${precio$} disminuiria a $${precio$ - (precio$ * 0.2)}`)
}
else if(precio$ >= 50000 & precio$ < 100000){
alert(`el Cliente ${nombre.toUpperCase()} es un Cliente Frecuente por lo que el valor de su ${producto1.toLowerCase()}: $${precio$} disminuiria a $${precio$ - (precio$ * 0.1)}`)
}
else{
alert(`el Cliente ${nombre.toUpperCase()} es un Cliente normal por lo que el valor de su ${producto1.toLowerCase()} con valor de $${precio$} no tendra descuento quedandose como $${precio$}`)
}
}


// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación

function ejercicio17() {
let frase = ""
let puntaje = ""

}


// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado

// Además:
// Contar la cantidad de caracteres del nombre

// Mostrar:
// Nombre en mayúsculas
// Cantidad de caracteres del nombre
// Promedio
// Estado final

function ejercicio18() {
let nombre = "Papelucho"
let n1 = 2.9
let n2 = 7.0
let n3 = 6.7
let promedion = (n1 + n2 + n3) / 3
let nombremayusq = nombre.toUpperCase()
if (promedion >= 6){
alert(`El estudiante ${nombremayusq} está destacado.
\nPromedio: ${promedion}.
\nLargo nombre: ${nombre.length}`)
}
else if (promedion >= 4){
alert(`El estudiante ${nombremayusq} está aprobado.
\nPromedio: ${promedion}
\nLargo nombre: ${nombre.length}`)
}
else{
alert(`El estudiante ${nombremayusq} está reprobado.
\nPromedio: ${promedion}
\nLargo nombre: ${nombre.length}`)
}
}

// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

// Además:

// Mostrar la cantidad de caracteres del nombre

function ejercicio19() {
let name = ""
let numeros1 = 4.1
let numeros2 = 6.7
let numeros3 = 6.9
let promedio = (numeros1 + numeros2 + numeros3) / 3
if (promedio >= 6.5){
alert(``)
}
}

// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación







// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:

// 30 → Muy larga

// 20 → Larga

// 10 → Mediana

// ≤ 10 → Corta