//const chalk = require('chalk');

function formatPokemon(a,b){
  if(a=== undefined || b === undefined){
    console.log('Datos de Pokémon incompletos')
  } else {
  //// Profe esto funciona sin el chalk y no entiendo por qué//////
    console.log(`Pokémon ${a} es de tipo ${b}`) 

      //////// Console con el chalk que tira el error ///////
  //console.log(`Pokémon ${chalk.yellow(a)} es de tipo ${chalk.yellow(b)}`)
  }
}

module.exports = formatPokemon;
