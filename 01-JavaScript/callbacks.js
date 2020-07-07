const fs = require('fs');

console.log('primero');

fs.readFile(
    __dirname + '/ejemplo.txt',
    'utf-8',
    (error, contenido) => {
        if (error) {
            console.log('error', error);
        } else {
            console.log(contenido);
        }
    }
);

console.log('final');

function escribirArchivo(path, contenidoNuevo) {
        fs.readFile(
        path,
        'utf-8',
        (error, contenido) => {
            if(error){
                console.log(error);
            } else{
                console.log("Contenido: ", contenido);
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    {encoding: 'utf-8', flag: 'a'},
                    (error) => {
                        if (error) {
                            console.log(error);
                        } else{
                            console.log('Operación terminada');
                        }
                    }
                );
            }

        }
    );

}
escribirArchivo(__dirname+'/06-ejemplo.txt', 'XD');