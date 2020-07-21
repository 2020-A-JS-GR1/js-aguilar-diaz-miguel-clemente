const libro_model = require('../model/libro.model');

module.exports = {
    init: () => {
        return new Promise(
            (res, rej) => {
                libro_model.loadData()
                    .then(
                        () => res()
                    )
                    .catch((err) => err);
            }
        );
    },
    findOne: (id) => {
        return libro_model.findOne(id);
    },
    create: (libro) => {
        
    },
    delete: (id) => {

    },
    update: (id, param) => {

    },
    showAll: () => {

    }
}