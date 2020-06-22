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

function nota(nombre){
    let consonantes= nombre.length;
    const vocales = nombre.toLowerCase().match(/[aeiou]/gi).length;
    consonantes-= vocales;
    const total=consonantes*0.05+vocales*0.1;
    return total;
}

// console.log(arreglo);

arreglo.map(valor=>{
    valor.nota+=nota(valor.nombre)
})

let aprobados=arreglo.filter((valor)=>{
    return valor.nota>=14
})

console.log('Aprobados:\n',aprobados);
