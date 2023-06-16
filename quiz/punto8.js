const writeToFile = require('./punto7')

function callFile() {
  const message = 'Examen finalizado';

  try {
    writeToFile(message);
  } catch (err) {
    console.error('Error:', err);
  }
}

module.exports = callFile;