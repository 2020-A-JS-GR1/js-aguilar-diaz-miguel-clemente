
function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero);
            } else {
                reject('No es par =(');
            }
        }
    )
    return miPrimerPromesa
}

promesaEsPar(2)
    .then(
        valor => {
            console.log(valor)
        }
    )
    .catch(
        error => {
            console.log(error)
        }
    )