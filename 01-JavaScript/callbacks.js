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