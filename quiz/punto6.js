const fs =  require ('fs') ;

function readFile(){
  fs.readFile('datos.txt', 'utf-8', (err, data) => {
    if(err) {
      console.log('El archivo "datos.txt" no existe. ', err);
    } else {
      console.log(data);
    }
  })
}

module.exports = readFile