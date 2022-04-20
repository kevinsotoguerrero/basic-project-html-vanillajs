const express = require('express')//require es una funcion de node que busca las librerias instaladas globalmente o en el proyecto
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ejemplo', funcionEjemplo)

function funcionEjemplo(peticion, resultado){
    resultado.send('pagina <strong>ejemplo</strong>')
}

app.listen(3000)