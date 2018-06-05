'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
  name: String,
  apellido: String,
  documento: Number,
  password: String,
  fechaNacimiento: Date,
  sexo: String,
  role: String,
  activo: Boolean,
  domicilio: { type: Schema.ObjectId, ref: 'Domicilio'}
})

module.exports = mongoose.model('User', UserSchema);
