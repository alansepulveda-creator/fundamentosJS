console.log("conexion con js correcta...");
/*
concatenación con el signo +
podemos unir texto y variables
*/
const nombre = "Alan";
const apellido = "Sepúlveda";
//unimos ambas constantes con un texto extra
console.log("Hola, mi Nombre es: " + nombre + " " + apellido);


/*
2- ver el tipo de dato (typeof)
*/
console.log("la variable nombre es un tipo de dato: " + typeof nombre);
/* Template literals (forma moderna de concatenar) */
console.log(`Hola, mi Nombre es: ${nombre} ${apellido}`);
/*mostrar el largo de un string(texto) - contar los caracteres*/

console.log(`El nombre ${nombre} tiene ${nombre.length} letras`);

/*crear una frase y contar sus caracteres*/
const frase = "mi gato se llama bellus";
console.log(`La frase: "${frase}" tiene ${frase.length} caracteres`);

/*metodos comunes en javascript para formatear texto*/
/*Transformar texto en mayusculas*/
let texto1 = "JAvAscrIpt Es lO mEjOr";
console.log(texto1.toUpperCase());
/*Transformar texto en minusculas*/
console.log(texto1.toLowerCase());
/*buscar texto dentro de un string*/
let texto2 = "leche,azucar,peras, huevos, harina";
console.log(texto2.includes("peras"));/*true*/

/*convertir una variable a texto*/
let telefono = 89182920;
let telefono_texto = String(telefono);
console.log(`mi numero de telefono es: ${telefono_texto} es de tipo ${typeof telefono_texto}`);