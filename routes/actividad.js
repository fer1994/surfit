'use strict'

var express = require('express');
var ActividadController = require('../controllers/actividad');
var md_auth = require('../middlewares/authenticated');
var api = express.Router();

api.post('/saveActividad',md_auth.ensureAuth, ActividadController.saveActividad);

module.exports = api;
