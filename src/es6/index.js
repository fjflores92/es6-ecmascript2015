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