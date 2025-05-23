//scope global
const fileName = document.currentScript.src.split('/').pop();
let personajeScopeGlobal = 'Luffy';
const movie = {
    personajePrincipal: "Luffy",
    personajeSecundario: "Zoro",
    name: 'name movie',// string
    alreadyWatched: false,// boolean
    seasons: 2, //number
    villanos: 'crododile',
    personajesTerciarios: 'usop',
    personajeConFrutaDelDiablo: true,
    numeroDeCapitulosQueapAparecioElPersonaje: 200 
};
// let cambia
// const no cambia al momento de declarar una variable
console.log("El nombre del archivo es: " + fileName);
console.log("El personaje es: " + movie.personajePrincipal);
let conditionScope = 'Im outside of a condition scope';
if (fileName === "onepiece.js") {
    // condition scope
    movie.personajePrincipal = 'yo';
    personajeScopeGlobal = 'scope global';
    console.log("¡Este es el archivo correcto!");
} else {
    console.log("Este no es el archivo esperado.");
}
console.log(conditionScope);
if (movie.seasons === 2) {
    personajeSecundario = 'Change';
    console.log("El protagonista es Luffy.");
    conditionScope = 'change';
} else {
    console.log("Este no es el personaje principal.");
}

const variableInGlobalScope = 'whatever';

// Me ayude con chat gpt por que no recuerdo como agregar las variables pero es lo que estaba checando segun lo que entendi es eso que tengo que decirle el LET para definir mi variable 
// y definir si el archivo o no es correco con el if y else como lo explicaste  