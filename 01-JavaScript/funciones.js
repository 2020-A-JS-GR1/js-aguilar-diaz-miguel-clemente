
function soloNumeros(a, b, c) {
    console.log(a, b, c);
}

soloNumeros(1, 2, 3);

const funcionUno = function () { };

const funcionDos = (x) => { return x };
//  const funcionDos=(x)=>x+1;

function parametroInfinitos(...params) {
    return params.reduce((acumulador, value) => acumulador + value, 0);
}

console.log(parametroInfinitos(1, 2, 3));