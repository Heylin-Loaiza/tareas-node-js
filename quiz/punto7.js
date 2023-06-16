const fs = require('fs');

function writeToFile(message){
  fs.writeFile('./resultados.txt', message, err => {
    if (err) {
      console.error('Error al escribir en el archivo' ,err);
    } else {
      console.log('Archivo escrito correctamente!')
    }
  });
}

module.exports = writeToFile;