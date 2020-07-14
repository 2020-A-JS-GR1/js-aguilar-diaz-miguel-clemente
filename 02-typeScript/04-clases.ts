class Persona {
  public nombre: string
  public apellido: string
  static nombreReferencial: string = 'hombre'

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre
    this.apellido = apellido
  }

  mostrarNombreApellido() {
    return this.nombre + ' ' + this.apellido
  }
}

class Usuario extends Persona {
  constructor(
    nombre: string,
    apellido: string,
    public cedula: string,
    public estadoCivil: string,
  ) {
    super(nombre, apellido)
  }
}

let dekim = new Usuario('Miguel', 'Aguilar', '99999999', 'nope')
console.log(dekim.nombre)
console.log(dekim)
