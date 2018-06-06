'use strict'

var express = require('express');
var DomicilioController = require('../controllers/domicilio');

var api = express.Router();

api.post('/registerDom', DomicilioController.saveDomicilio);

module.exports = api;
