const infoPokemon = require('./punto3');
const formatPokemon = require('./punto4');
// const readFile = require('./punto6')
// const callFile = require('./punto8')

async function main(numero) {
  const info = await infoPokemon(numero);
  
  const {name, types} = info
  const type = types.map(e => e.type.name).join(' y ')
  formatPokemon(name, type)
}
//Ingresar número del pokemon 
main(25)

// readFile()
// callFile();