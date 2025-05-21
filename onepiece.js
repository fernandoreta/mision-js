const fileName = document.currentScript.src.split('/').pop();
const personajePrincipal = "Luffy";
let personajeSecundario = "Zoro"
// let cambia
// const no cambia al momento de declarar una variable
console.log("El nombre del archivo es: " + fileName);
console.log("El personaje es: " + personajePrincipal);
if (fileName === "onepiece.js") {
    console.log("¡Este es el archivo correcto!");
} else {
    console.log("Este no es el archivo esperado.");
}
if (personajePrincipal === "Luffy") {
    personajeSecundario = 'Change';
    console.log("El protagonista es Luffy.");
} else {
    console.log("Este no es el personaje principal.");
}

// Me ayude con chat gpt por que no recuerdo como agregar las variables pero es lo que estaba checando segun lo que entendi es eso que tengo que decirle el LET para definir mi variable 
// y definir si el archivo o no es correco con el if y else como lo explicaste