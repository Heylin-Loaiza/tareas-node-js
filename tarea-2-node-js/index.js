const chalk = require('chalk');
const sumar = require('./suma');
const restar = require('./resta');
const multiplicar = require('./multiplicacion');
const dividir = require('./division');


console.log(chalk.red(sumar(2, 7)));
console.log(chalk.yellow(restar(8, 5)));
console.log(chalk.green(multiplicar(3, 5)));
console.log(chalk.white(dividir(10, 2)));
