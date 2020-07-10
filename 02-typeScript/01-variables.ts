//Los tipos de variables se tipan con el valor con el que es inicializado o poniendo si tipo explicitamente
let nombre:string = 'Miguel';
let edad: number =1;
let fecha:Date=new Date();

//Se puede usar una variable que use cualquier tipo de valor con any
let cualquierCosa:any=1;


//Se puede usar dos tipos de valores con los que se puede tipar una variable
let variosTipos:number | string =1;
variosTipos="1";