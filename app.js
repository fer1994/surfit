'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Rutas
var user_routes = require('./routes/user');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar Cabeceras


//Rutas Base
app.use('/user', user_routes);

module.exports = app;
