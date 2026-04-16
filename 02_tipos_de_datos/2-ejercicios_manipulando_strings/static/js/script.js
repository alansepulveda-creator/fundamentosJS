console.log("conexion con js correcta...");



// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.

let nombre = "Camila";
let edad = 25;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años. El tipo de dato de edad es: ${typeof edad}`);


// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas

let comuna = "Maipú";
let region = "Metropolitana";
console.log(`Vivo en la comuna de ${comuna.toUpperCase()} y en la región ${region.toLowerCase()}`); 


// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato

let lenguaje = "Python";
console.log(`La palabra ${lenguaje} tiene ${lenguaje.length} caracteres, en mayúsculas se escribe ${lenguaje.toUpperCase()} y su tipo de dato es: ${typeof lenguaje}`);


// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas

let mensaje = "Me encanta programar en JavaScript";
console.log(`el mensaje ${"Me encanta programar en JavaScript"} tiene ${mensaje.length} caracteres y contiene la palabra JavaScript ${mensaje.includes("JavaScript")} en minusculas se escribe ${mensaje.toLowerCase()}`);


// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres

let compras = "arroz, fideos, aceite, sal";
console.log(`la lista de compras ${compras} contiene la palabra aceite ${compras.includes("aceite")} en mayúsculas se escribe ${compras.toUpperCase()} y tiene ${compras.length} caracteres`)

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene

let numeroCasa = 456;
let numeroCasaTexto = String(numeroCasa)
console.log(`el numero de telefono de mi casa es: ${numeroCasaTexto} es de tipo ${typeof numeroCasaTexto} tiene ${numeroCasaTexto.length} caracteres`)


// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS

let nombre1 = "Diego";
let apellido = "Rojas";
console.log(`Mi nombre completo es ${nombre1} ${apellido} y tiene ${nombre1.length + apellido.length + 1} caracteres en mayúsculas se escribe ${nombre1.toUpperCase()} ${apellido.toUpperCase()}`)


// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres

let mensaje1 = "Hoy aprenderemos sobre strings";
console.log(`el mensaje ${"Hoy aprenderemos sobre strings"} tiene ${mensaje1.length} caracteres y contiene la palabra ${mensaje1.includes("strings")} en mayúsculas se escribe ${mensaje1.toUpperCase()}`);


// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres

let texto = "Programar es divertido";
console.log(`El texto original es: ${texto}, en minúsculas se escribe ${texto.toLowerCase()}, en mayúsculas se escribe ${texto.toUpperCase()} y tiene ${texto.length} caracteres`);


// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS

let curso = "3C";
let anio = 2026;
let aniotexto = String(anio)
console.log(`hola, soy del curso ${curso} del año ${aniotexto} es de tipo ${typeof aniotexto} tiene ${aniotexto.length} caracteres`.toUpperCase())


// ⭐ Desafío extra (nivel alto)
// Crea la variable:
// textoFinal: Estoy listo para el desafío
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "desafío"
// Muestre el texto en MAYÚSCULAS
// Indique el tipo de dato 