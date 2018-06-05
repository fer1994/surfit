'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Rutas

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar Cabeceras



//Rutas Base
app.get('/pruebas', function(req,res){
  res.status(200).send({message: 'Bienvenido yo jijiji'});
});

module.exports = app;
