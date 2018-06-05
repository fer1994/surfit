'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TurnoSchema = Schema({
  fechaTurno: Date,
  suscripcion: { type: Schema.ObjectId, ref: 'Suscripcion'},
  clase: {type: Schema.ObjectId, ref: 'Clases'}
})

module.exports = mongoose.model('Turno', TurnoSchema);
