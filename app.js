'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Rutas
var user_routes = require('./routes/user');
var suscrip_routes = require('./routes/suscripcion');
var act_routes = require('./routes/actividad');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar Cabeceras


//Rutas Base
app.use('/user', user_routes);
app.use('/suscrip', suscrip_routes);
app.use('/act', act_routes);

module.exports = app;
