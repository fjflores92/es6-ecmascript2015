// junio 2018

// es9 objeto reposo / propagación (...)
const person = {
    'name': 'Paco',
    'age': 28,
    'country': 'MX'
};

let { name, ...all } = person;
console.log(name, all);

// es9 Propiedades de propagación
const personalData = {
    'name': 'Paco'
};

const person = {
    ...personalData,
    'age': 28,
    'country': 'MX'
};

console.log(person);

// es9 promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Hello world!'), 3000) : reject(new Error('Test error'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(e => console.log(e))
    .finally(() => console.log('Finalizo la promesa'));

// es9 regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('1992-05-12');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);