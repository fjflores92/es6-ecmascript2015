// Junio 2017

// es8 Object.entries, arreglo de [clave,valor], ej: [[clave, valor],[clave,valor]] 

const data = {
    ic: 'Paco',
    lm: 'Sarai',
    lp: 'Karla'
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

// es8 Object.values, valores de un objeto a un arreglo

const data = {
    ic: 'Paco',
    lm: 'Sarai',
    lp: 'Karla'
}

const values = Object.values(data);

console.log(values);
console.log(values.length);

// es8 padStart y padEnd

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'-------'));

// es8 async await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) ? setTimeout(() => resolve('Hello world'), 3000) : reject(new Error('Test error'));
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const otherFunc = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (e) {
        console.log(e);
    }
}

otherFunc();