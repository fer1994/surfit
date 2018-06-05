'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClasesSchema = Schema({
  cantGente: Number,
  actividad: { type: Schema.ObjectId, ref: 'Actividad'}
})

module.exports = mongoose.model('Clases', ClasesSchema);
