'use strict'

var express = require('express');
var DomicilioController = require('../controllers/domicilio');

var api = express.Router();

api.post('/registrarDomicilio', DomicilioController.saveDomicilio);

module.exports = api;
