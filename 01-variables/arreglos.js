const arreglo=[1,2,3,4,5,6,7,8,9,10];

let cualquierCosa='lola';
cualquierCosa=1;
cualquierCosa=null;

let arregloTodo=[true,'lol',1,null,undefined,{nombre:''}];

for(let arr of arreglo){
    console.log(arr)
}

for(let arr in arreglo){
    console.log(arr)
}

arreglo.push(2);
arreglo.unshift(30); // anade al principio
arreglo.splice(0,1);
arreglo.splice(0,0,3,4,5);
console.log(arreglo.indexOf(5));


console.log(arreglo)