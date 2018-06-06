'use strict'

var Domicilio = require('../models/domicilio');

function saveDomicilio(req,res){
  res.status(500).send({ message: 'Error al guardar el usuario'});
}

module.exports = {
  saveDomicilio
};
