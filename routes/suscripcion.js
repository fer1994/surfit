'use strict'

var express = require('express');
var SuscripcionController = require('../controllers/suscripcion');
var md_auth = require('../middlewares/authenticated');
var api = express.Router();

api.get('/getSuscrip',md_auth.ensureAuth, SuscripcionController.getSuscripcion);
api.post('/saveSuscripcion',md_auth.ensureAuth, SuscripcionController.saveSuscripcion);

module.exports = api;
