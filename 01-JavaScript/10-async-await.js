
const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();

async function ejercicio() {
    try {
        const respuesta = await promesaEscribirArchivo;
    } catch (e) {
        console.log('error')
    }
}