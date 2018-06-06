'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
  name: String,
  apellido: String,
  email: String,
  documento: Number,
  password: String,
  fechaNacimiento: Date,
  sexo: String,
  role: String,
  activo: Boolean,
  localidad: String,
  provincia: String,
  domicilio: String
})

module.exports = mongoose.model('User', UserSchema);
