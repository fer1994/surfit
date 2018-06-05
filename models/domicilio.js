'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DomicilioSchema = Schema({
  direccion: String,
  numero: Number,
  departamento: String,
  numDpto: Number,
  localidad: String,
  provincia: String
})

module.exports = mongoose.model('Domicilio', DomicilioSchema);
