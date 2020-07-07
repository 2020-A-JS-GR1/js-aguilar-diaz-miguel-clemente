const fspromises = require('../../01-JavaScript/09-ejercicio-lec-esc')

const direccionArchivo = __dirname + '/02-deber.txt'

async function ejercicio() {
    try {
        let lectura1 = await fspromises.leerArchivo(direccionArchivo);
        await fspromises.escribirArchivo(direccionArchivo, "holi!!! :D");
        let lectura2 = await fspromises.leerArchivo(direccionArchivo);
        console.log("Lectura 1", lectura1, "\nLectura 2", lectura2, "\n");
    } catch (e) {
        console.log(e)
    }
}

ejercicio()