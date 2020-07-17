const entity = require('./entity/libro.entity')
const libro_model = require('./model/libro.model')

let libro = new entity(1, "lo que el viento se llevo", false, 12.3);

libro_model.loadData()
.then(
    (data)=>{
        console.log(libro_model.data);
        console.log(libro_model.find({costo:12.3}));
        libro_model.update(2,{nombre:"lol"})
        // return libro_model.create(libro);
    }
)
.then(
    ()=>{
        return libro_model.saveData();
    }
)
.then(
    ()=>{
        console.log('todo ok!')
    }
)
.catch(
    (err)=>{
        console.log(err);

    }
)
