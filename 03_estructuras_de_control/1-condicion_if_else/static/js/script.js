console.log("Conexion exitosa con JS...")

/*
=======================================================
1. ¿Que es una condicion es JS?
=======================================================
Una condicion nos permite tomar decisiones en el codigo.
Separando dos caminos, el si (if), y el no (else) 

Estructura basica (Sintaxis): --> (Reglas del lenguaje
de programacion)

if (condicion) {
    //codigo que se ejecuta si la condicion es verdadera.
}

else {
    //codigo que se ejecuta si la condicion es falsa.
}

*/

//Ejemplo 1: (Numerico)
let edad = 18;
if(edad == 20){  //Condicion "Si"
    console.log("Eres mayor de edad)");
}

//Ejemplo 2: Dos caminos posibles.
let temperatura = 10; 

if (temperatura > 20){ //Condicion si
    console.log("Hace calor")
} else { //Condicion no
    console.log("Hace frio")
}

//Ejemplo 3: IF - ELSE IF - ELSE (Multiples condiciones)

let nota =  5.5;

if(nota >= 6.0){
    console.log("Excelente!");
} else if (nota >= 4.0){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//Ejemplo 4: Condiciones con STRING
let nombre = "Alan";

//Comparacion excacta (===)
if (nombre === "Javier"){
    console.log("Hola, " + nombre)
} else {
    console.log("Tu no eres Javier, tu eres " + nombre)
}

/*
=================================
Operadores de Comparacion
=================================

( >  ) mayor que
( <  ) menor que
( >=  ) mayor o igual
( <=  ) menor o igual
( === ) estricta igualdad
( !== ) distinto estricto
( ==  ) igualdad
( !=  ) distinto
*/

// Ejemplo de distinto
let num = 10;
let num2 =  5;
if(num !== num2){
    console.log(`El numero: ${num} es distinto que ${num2}`)
} else{
    console.log("Son iguales!")
}