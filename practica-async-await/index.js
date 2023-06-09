const axios = require('axios');

async function getCountryData(code) {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    console.log('The country is: ', response.data)
  } catch (error) {
    console.error('Error en la solicitud HTTP:', error);
  }
}
getCountryData('col');