'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Rutas
var user_routes = require('./routes/user');
var domicilio_router = require('./routes/domicilio');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar Cabeceras


//Rutas Base
app.use('/user', user_routes);
app.use('/adress', domicilio_router);


module.exports = app;
