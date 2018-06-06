'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../middlewares/authenticated');
var api = express.Router();

//md_auth.ensureAuth

api.get('/probado', md_auth.ensureAuth,  UserController.prueba);
api.post('/registerUser', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.put('/updateUser/:id?',md_auth.ensureAuth, UserController.updateUser);

module.exports = api;
