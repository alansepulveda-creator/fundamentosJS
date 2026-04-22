console.log("conexion exitosa con js")

// 📌 Ejercicios
// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en alert.

function edadProyectada(){
    let edad = 16;
    alert(`mi edad es: ${edad}
    En 5 años tendré: ${edad + 5}
    Hace 10 años tenia ${edad - 10}`);
}


// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compracondescuento(){
    let valor =25000;
    let descuento =0.2;
    alert(`el valor es: ${valor}
el descuento es ${descuento}
el valor final es ${valor - (valor * descuento)}`);
}


// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function Promedionotas(){
    let nota1 =4.4;
    let nota2 =5.8;
    let nota3 =2.6;
    let promedio = (nota1 + nota2 + nota3);
    alert(`se tiene 3 notas ${nota1}, ${nota2}, ${nota3}
        El promedio de estas es: ${promedio}
        y redondeado es ${Math.round(promedio)}`)
}


// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function Temperatura(){
let temperatura = 3
let aumento = temperatura + 3
let disminucion = 5
alert(`la temperatura final es ${aumento - disminucion} grado Celcius`)
}

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function Sueldosemanal(){
let sueldo = 8000
let horas = 45
let horasextras = 5
let horastotales = horas + horasextras
let nuevosueldo = sueldo * horastotales
alert(`el nuevo sueldo sera ${nuevosueldo}`)
}


// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function divisionconresto(){
let num1 = 13
let num2 = 6
let division = num1 / num2
let modulo = num1 % num2
alert(`la división de 13 y 6 es ${division} ya que 6 cabe 2.16 veces en el numero 13 y el resto es ${modulo} ya que si no hay decimales en el resultado quedaria un 1 en solitario`)
}

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Verifica si uno de ellos es igual a 10
// Muestra si el primero es mayor que el segundo

function comparacion(){
    let numero1 = 10
    let numero2 = 30
    alert(`el numero 1 es igual a 10 y el numero 1 es mayor que el numero 2: ${numero1 > numero2}`)

}


// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function notacioncientifica(){
    let poblacion = 1e4/4
    alert(` la cantidad de personas en la poblacion es ${poblacion}`)
}


// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function potenciaYCalculo(){
let numeross = 3 ** 4 * 2
alert(`el resultado final es: ${numeross - 10}`)
}


// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function dadoAleatorio() {
let dado = Math.floor(Math.random()*6) + 1;
alert(`Tirar dado: ${dado}
    Si el numero es mayor a 4 o igual: ${dado >= 4}`)
}