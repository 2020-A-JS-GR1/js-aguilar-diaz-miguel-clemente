const inquirer = require('inquirer');

async function main(){
    const inquirerData=await inquirer.prompt([
        {
            type: 'input',
            name: 'apellido',
            message: 'Ingresa tu apellido',
        },
        {
            type: 'input',
            name: 'nombre',
            message: 'Ingresa tu nombre',
        }
    ])
    console.log(inquirerData);
}

main();