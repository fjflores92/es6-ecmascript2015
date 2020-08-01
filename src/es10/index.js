// junio 2019

// es10 array.flat devolver una matriz con una submatriz aplanada, recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

// es10 array.flatMap mapear cada elemento, luego pasarle una funcion y aplanar

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// es10 trimStart y trimEnd
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

// es10 optional catch biding

try {
    
} catch/*(error) ya no es necesario colocarlo*/ {
    error
}

// es10 fromEntries
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

// es10 symbol object
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);