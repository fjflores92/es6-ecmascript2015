// es6 default params

newFunction = (name = 'Paco', age = 28, country = 'MX') => {
    console.log(name, age, country);
}

newFunction();
newFunction('Sarai', 26, 'MX');

// es6 template literals concatenación

let hello= 'Hello';
let world = 'World';
var helloWorld = `${hello} ${world}`;
console.log(helloWorld);

// es6 template literals multilinea

let lorem = `Toda esta es la línea uno.
Esta es la línea dos.`;

console.log(lorem);

// es6 desestructuración de elementos

let person = {
    'name': 'Paco',
    'age': 28,
    'country': 'MX'
};

console.log(person.name, person.age);

const { name, age } = person;

console.log(name, age);

// es6 extensión de elementos

let team1 = ['Hugo', 'Paco', 'Luis'];
let team2 = ['Valeria', 'Sarai', 'Camila'];
let education = ['Fernando', ...team1, ...team2];

console.log(education);

// es6 diferencia entre var y let

{
    var globalVar = "global var";
}

{
    let globalLet = 'global let';
    // globalLet es accesible porque se esta leyendo en el bloque de código (block scope)
    console.log(globalLet);
}

console.log(globalVar);
// Error, inaccesible en global scope, fuera del bloque de código
console.log(globalLet);

// es6 constantes

const a = 'b';
a = 'a';

console.log(globalLet);
