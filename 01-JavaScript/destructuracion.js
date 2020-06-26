const adrian={
nombre: "Adrian"
};
const carolina = {
    apellido: "Eguez"
};
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];

const adrianCarolina={
    ...adrian,
    ...carolina
}

console.log(adrianCarolina);
console.log(adrian)

const superarreglo=[
    ...arregloUno,
    ...arregloDos
]

console.log(superarreglo)