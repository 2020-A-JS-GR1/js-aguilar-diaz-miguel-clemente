const fs = require('fs');

const dir = __dirname + '/data/libro.data'

module.exports = {
    data: [],
    loadData: () => {
        return new Promise((res, rej) => {
            fs.readFile(dir, 'utf-8', (err, dat) => {
                if (err) {
                    rej(err);
                } else {
                    try {
                        this.data = JSON.parse(dat);
                        res(this.data);
                    } catch (e) {
                        rej(e)
                    }
                }
            })
        })
    },
    saveData: () => {
        return new Promise((res, rej) => {
            fs.writeFile(dir, JSON.stringify(this.data), (err) => {
                if (err) rej(err);
                res()
            })
        })
    },
    findOne: (id) => {
        return new Promise((res, rej) => {
            const datos = this.data.find(
                val => {
                    return Number(id) === val.id;
                }
            )
            res(datos)
        })
    },
    find: (where) => {
        return new Promise((res, rej) => {
            try {
                whereKeys = Object.keys(where);
                const data = this.data.filter(value => {
                    return value[whereKeys[0]] === where[whereKeys[0]]
                });
                res(data);
            } catch (e) {
                rej(e);
            }
        });
    },
    create: (libro) => {
        return new Promise((res, rej) => {
            try {
                libro = JSON.stringify(libro);
                libro = JSON.parse(libro);
                libro.id = Number(libro.id);
                libro.costo = Number(libro.costo);
                libro.id_libreria = Number(libro.id_libreria);
                libro.prestado = (libro.prestado == "true");
                this.data.push(libro);
                res();
            } catch (e) {
                rej(e);
            }
        });
    },
    delete: (id) => {
        return new Promise((res, rej) => {
            this.data = this.data.filter(value => value.id !== Number(id))
            res(this.data)
        })
    },
    update: (id, param) => {
        return new Promise((res, rej) => {
            try {
                param = transformDataUpdate(param);
                const key = Object.keys(param);
                const algo = this.data
                    .filter(value => value.id === Number(id))
                    .map(value => value[key[0]] = param[key[0]]);
                res(algo);
            } catch (e) {
                rej(e)
            }
        })
    },
    show:()=>this.data
}

function transformDataUpdate(param) {
    const key = Object.keys(param);
    switch (key[0]) {
        case 'nombre':
            param[key[0]] = param[key[0]];
            break;
        case 'prestado':
            param[key[0]] = param[key[0]]=='true';
            break;
        default:
            param[key[0]] = Number(param[key[0]]);
            break;
    }
    return param;
}