class Libro {
    id;
    nombre;
    prestado;
    costo;
    id_libreria;

    constructor(id, nombre, prestado, costo, id_libreria) {
        this.id = id;
        this.nombre = nombre;
        this.prestado = prestado;
        this.costo = costo;
        this.id_libreria = id_libreria;
    }
}

module.exports = Libro;