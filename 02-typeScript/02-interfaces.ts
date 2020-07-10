//Este tipo de datos comparado con las clases no ocupan espacio en la memoria, y sirve para setear datos, ademas se los puede distinguir si estos son obligatorios.
interface Usuario {
  nombre: string
  apellido: string
  edad?: number //opcional
  sueldo?: number //opcional
  casado: boolean
  estado: 'BN' | 'OT'
  imprimirUsuario: (mensaje: string) => string //es posible definir una funcion que es abstracta
  calcularImpuesto: (impuesto: number) => number
  estadoActual: () => 'AP' | 'AF' | 'AT'
}

//Es necesario colocar todos lo datos que sean obligatorios
const dekim: Usuario = {
  nombre: 'Miguel',
  apellido: 'Aguilar',
  sueldo: 12.5,
  casado: false,
  estado: 'BN',
  imprimirUsuario: (mensaje: string) => 'El mensaje es: ' + mensaje,
  calcularImpuesto: (impuesto: number) => this.sueldo + this.sueldo * impuesto,
  estadoActual: () => 'AP',
}

console.log(dekim.calcularImpuesto(1))
