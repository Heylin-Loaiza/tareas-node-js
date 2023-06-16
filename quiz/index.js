const infoPokemon = require('./punto3');
const formatPokemon = require('./punto4');

async function main(numero) {
  const info = await infoPokemon(numero);
  
  const {name, types} = info
  formatPokemon(name, types)
}

main(25)