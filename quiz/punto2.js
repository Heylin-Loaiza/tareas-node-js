const axios = require('axios');


const url = `https://pokeapi.co/api/v2/pokemon`;

async function fetchPokemon(numero) {
  try {
    const response = await axios.get(`${url}/${numero}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = fetchPokemon;