const arreglo = [
    {
        id:1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];

const respuestaFind=arreglo.find(
    (valor, indice, arreglo)=>{
        return valor.nombre==='Cristian'
    }
)

console.log(respuestaFind);

const respuestaMap=arreglo.map(
    (valor, indice, arreglo)=>{
        valor.nota=valor.nota+1
        return valor;

    }
)

console.log(respuestaMap)

const respuestaMap2=arreglo.map(
    (valor, indice, arreglo)=>{
        return valor.nota;

    }
)

console.log(respuestaMap2)

const respuestaFilter=arreglo.filter(
    (value)=>{
        return value.nota>14;
    }
)

console.log(respuestaFilter)

var cadena = "lola";
var numeroVocales = cadena.match(/[aeiou]/gi).length;

console.log(numeroVocales);
