const inquirer = require('inquirer');
const libreria = require('../model/libreria.model')
const libro = require('../model/libro.model');

const initArray = ['Crear', 'Eliminar', 'Actualizar', 'Buscar', 'Mostrar todo', 'Salir'];
const questions = ['Que desea crear?', 'Que desea eliminar?', 'Que desea actualizar?', 'Que desea buscar?'];
const libLibreria = ['Libro', 'Libreria']
const inputsLibro = ['id', 'nombre', 'prestado', 'costo', 'id_libreria']
const inputsLibreria = ['id', 'nombre', 'direccion', 'habilitado', 'avaluo']

libreria.loadData()
libro.loadData()

module.exports.view = {
    init: () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'init',
                message: 'Que desea hacer?',
                choices: initArray
            }
        ])
            .then(
                val => {
                    val = initArray.indexOf(val.init);
                    switch (val) {
                        case 4: //Mostrar Todo
                            this.view.init();
                            break;
                        case 5: //Salir
                            console.log('See you next time');
                            break;
                        default:
                            this.view.preguntar(val);
                            break;
                    }
                }
            )
            .catch(
                err => {
                    console.error(err);
                }
            )
    },
    preguntar: (index) => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'otro',
                message: questions[index],
                choices: libLibreria
            }
        ])
            .then(
                val => {
                    val = libLibreria.indexOf(val.otro);
                    switch (index) {
                        case 0:
                            this.view.crear(val);
                            break;
                        case 1:
                            this.view.borrar(val);
                            break;
                        case 2:
                            this.view.actualizar(val);
                            break;
                        case 3:
                            this.view.buscar(val);
                            break;
                        default:
                            console.error('Error');
                            break;
                    }
                }
            )
            .catch(
                err => {
                    console.error(err);
                }
            )
    },
    crear: (index) => {
        let inputs = undefined;
        if (index === 0) {
            inputs = inputsLibro;
        } else {
            inputs = inputsLibreria;
        }
        inquirer.prompt([
            {
                type: 'input',
                name: inputs[0],
                message: 'Ingresa ' + inputs[0],
            },
            {
                type: 'input',
                name: inputs[1],
                message: 'Ingresa ' + inputs[1],
            },
            {
                type: 'input',
                name: inputs[2],
                message: 'Ingresa ' + inputs[2],
            },
            {
                type: 'input',
                name: inputs[3],
                message: 'Ingresa ' + inputs[3],
            },
            {
                type: 'input',
                name: inputs[4],
                message: 'Ingresa ' + inputs[4],
            }
        ])
            .then(
                val => {
                    if (index === 0) {
                        return libro.create(val);
                    } else {
                        return libreria.create(val);
                    }
                }
            )
            .then(
                () => {
                    console.log("Elemento Creado");
                    libro.saveData();
                    libreria.saveData();
                    this.view.init()
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
    },
    borrar: (index) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese la id del elemento a eliminar'
            }
        ])
            .then(
                val => {
                    if (index === 0) {
                        return libro.delete(val.id);
                    } else {
                        return libreria.delete(val.id);
                    }
                }
            )
            .then(
                val => {
                    console.log('Elemento eliminado');
                    libreria.saveData();
                    libro.saveData();
                    this.view.init();
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
    },
    actualizar: (index) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese la id del elemento a actualizar'
            }
        ])
            .then(
                val => {
                    if (index === 0) {
                        return libro.findOne(val.id);
                    } else {
                        return libreria.findOne(val.id);
                    }
                }
            )
            .then(
                val2 => {
                    if (val2 !== undefined) {
                        console.log(val2);
                        inquirer.prompt([
                            {
                                type: 'list',
                                name: 'id',
                                message: 'Seleccione el dato a actualizar',
                                choices: Object.keys(val2)
                            }
                        ])
                            .then(
                                val => {
                                    return inquirer.prompt([
                                        {
                                            type: 'input',
                                            name: val.id,
                                            message: 'Ingrese el nuevo dato para ' + val.id
                                        }
                                    ])
                                }
                            )
                            .then(
                                val => {
                                    if (index === 0) {
                                        return libro.update(val2.id, val)
                                    } else {
                                        return libreria.update(val2.id, val)
                                    }
                                }
                            )
                            .then(
                                () => {
                                    console.log('Elemento actualizado');
                                    libro.saveData();
                                    libreria.saveData();
                                    this.view.init();
                                }
                            )
                            .catch(
                                err => {
                                    console.log(err);
                                }
                            )
                    } else {
                        console.log('Elemento no encontrado');
                        this.view.init();
                    }

                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
    },
    buscar: (index) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese la id del elemento a buscar'
            }
        ])
            .then(
                val => {
                    if (index === 0) {
                        return libro.findOne(val.id);
                    } else {
                        return libreria.findOne(val.id);
                    }
                }
            )
            .then(
                val => {
                    console.log(val);
                    this.view.init();
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
    },
    mostrarTodo: () => { },
}
