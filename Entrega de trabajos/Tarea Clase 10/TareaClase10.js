// Primer ejercicio
// una variable es un contenedor de informacion

let nombre = "Programación" + "Facil.";
let saludo = "Les doy la bienvenida a mi pagina";
let comision = "Numero 4";
let fraseCompleta = saludo + nombre + comision ;

console.log(fraseCompleta);

// Segundo ejercicio
// una variable es un contenedor de informacion

let frase = "Javascript " + "es un lenguaje" + "esencial para crear" + " sitios web poderosos.";

console.log(frase);

// Tercer ejercicio
// una variable es un contenedor de informacion

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";

let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;

console.log(concatenaNumeros);

// Cuarto ejercicio
// una variable es un contenedor de informacion

var age = prompt("Cual es tu edad:?");
console.log(age);

var nombres = prompt("Cual es tu nombre:?");
console.log(nombres);

console.warn("Nombre");
console.warn("Edad");


// Quinto ejercicio
// una variable es un contenedor de informacion

let edad;
edad = prompt("Introduce tu edad");

if (edad >= 18) {
    alert("Puedes entrar, eres mayor de edad.");
} else {
    alert("No puedes entrar, eres menor de edad");
}

// Sexto ejercicio
// una variable es un contenedor de informacion

let sexo;
sexo = prompt("Introduce tu sexo (H=Hombre y M=Mujer)");

if (sexo == "H"){
    alert("Eres un hombre");
} else if (sexo == "M") {
    alert("Eres una mujer");
}

if (sexo == "M">=20) {
    alert("Puedes entrar")
} else {
    alert("No puedes entrar")
}

if (sexo == "H">=18) {
    alert("Puedes entrar")
} else {
    alert("No puedes entrar")
}
