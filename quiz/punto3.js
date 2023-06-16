const fetchPokemon = require('./punto2');

async function infoPokemon(numero) {
  if (numero < 1 || numero > 898) {
    throw new Error ('Número de Pokémon inválido');
  }

  try {
    const pokemon = await fetchPokemon(numero);
    // console.log(`Pokémon: ${pokemon.name}, tipo: ${pokemon.types.map(e => e.type.name)}`)
    return pokemon
  } catch (error) {
    console.error(error);
  }
}

module.exports = infoPokemon;