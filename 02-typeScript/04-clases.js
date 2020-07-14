class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    mostrarNombreApellido() {
        return this.nombre + ' ' + this.apellido;
    }
}
Persona.nombreReferencial = 'hombre';
class Usuario extends Persona {
    constructor(nombre, apellido, cedula, estadoCivil) {
        super(nombre, apellido);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
let dekim = new Usuario('Miguel', 'Aguilar', '99999999', 'nope');
console.log(dekim.nombre);
console.log(dekim);
