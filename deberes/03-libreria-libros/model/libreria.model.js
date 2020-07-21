const fs = require('fs');

const dir = __dirname + '/data/libreria.data'

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
                libro.id=Number(libro.id);
                libro.habilitado=(libro.habilitado=='true')
                libro.avaluo=Number(libro.avaluo)
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
}