'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActividadSchema = Schema({
  nombre: String,
  activo: Boolean
})

module.exports = mongoose.model('Actividad', ActividadSchema);
