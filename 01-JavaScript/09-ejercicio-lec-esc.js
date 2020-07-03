const fs = require('fs');
const fsPromises = fs.promises;

const direccionArchivo = __dirname + '/09-ejejcicio-lec-esc-promesas'

function escribirArchivo(dirreccion, contenido) {
    return fsPromises.appendFile(dirreccion, contenido);
}

function leerArchivo(dirreccion) {
    return fsPromises.readFile(dirreccion, 'utf-8');
}

leerArchivo(direccionArchivo)
    .then(
        valor => {
            console.log("Contenido del archivo: \n", valor);
            return escribirArchivo(direccionArchivo, "\nahora no!!! \n")
        }
    )
    .then(
        () => {
            console.log('Archivo escrito');
            return leerArchivo(direccionArchivo)
        }
    )
    .then(
        valor => {
            console.log("Contenido del archivo: ", valor);
        }
    )
    .catch(
        error => {
            console.error(error);
        }
    )