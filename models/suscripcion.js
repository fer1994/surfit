'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuscripcionSchema = Schema({
  user: { type: Schema.ObjectId, ref: 'User'},
  actividad: { type: Schema.ObjectId, ref: 'Actividad'},
  estado: String,
  fechaSuscripcion: Date,
  fechaVencimiento: Date,
  clasesRestante: Number
})

module.exports = mongoose.model('Suscripcion', SuscripcionSchema);
