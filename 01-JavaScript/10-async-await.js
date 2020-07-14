
const promesaLeerArchivo = () => new Promise((resolve, reject) => { resolve("listo leer") });
const promesaEscribirArchivo = () => new Promise((resolve, reject) => { resolve("listo escribir") });

async function ejercicio() {
    try {
        console.log(1);
        const respuesta1 = await promesaEscribirArchivo();
        console.log(respuesta1);
        const respuesta2 = await promesaLeerArchivo();
        console.log(respuesta2);
        console.log(2);
    } catch (e) {
        console.log('error', e);
    }
}

const respuestaEjercicio = ejercicio();
// console.log(respuestaEjercicio);

console.log(promesaLeerArchivo());
console.log(promesaEscribirArchivo());
