const Libro = require("./libro.entity");

class Libreria {
    id;
    nombre;
    direccion;
    habilitado;
    avaluo;

    constructor(id, nombre, direccion, habilitado,avaluo){
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
        this.habilitado=habilitado;
        this.avaluo=avaluo;
    }
}

module.exports = Libreria;