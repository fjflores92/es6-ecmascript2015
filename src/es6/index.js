// 2015

// es6 default params

function newFunction (name = 'Paco', age = 28, country = 'MX') {
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

// es6 extensión de elementos (spread operator)

let team1 = ['Hugo', 'Paco', 'Luis'];
let team2 = ['Valeria', 'Sarai', 'Camila'];
let education = ['Fernando', ...team1, ...team2];

console.log(education);

// es6 rest arguments

function sum( first, ...others ) {
    for ( var i = 0; i < others.length; i++ )
        first += others[i];
    return first;
}
console.log(sum(1,2,3,4))// sum(1, 2, 3, 4) == 10;

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

// es6 parámetros en objetos
let name = 'Paco';
let age = 28;

persona = {
    name,
    age
}

console.log(persona);

// es6 iteración de arreglo de objetos y arrow functions
const people = [
    {
        name: 'Paco',
        age: 28,
        country: 'MX'
    },
    {
        name: 'Sarai',
        age: 26,
        country: 'MX'
    }
]

let listOfNames = people.map(function (item) {
    console.log(item.name);
});

let listOfAges = people.map(item => console.log(item.age));

const listOfPeopleParams = people.map(({name, age, country} = item) => console.log(name, age, country));

// es6 ejemplos de declaración de arrow functions
const function1 = (param1, param2, param3) => {
    console.log(param1, param2, param3);
}

const function2 = param => {
    console.log(param);
}

const square = num => num * num;

// es6 promesa
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello!'))
    .catch(error => console.log(error));

// es6 clases
class Person {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
    }

    saludar = (firstName, lastName) => {
        this.firstName = firstName;
        this.lastName = lastName;
        let saludo =  `¡Hola! Soy ${this.firstName} ${this.lastName}`;
        console.log(saludo);
    };
}

const paco = new Person();
paco.saludar('Francisco', 'Flores');

// es6 módulos
import {hello} from './module';
console.log(hello());

// es6 generadores
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);