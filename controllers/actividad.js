'use strict'

var Actividad = require('../models/actividad');

function saveActividad(req, res){
  var act = new Actividad();
  var params = req.body;

  act.nombre = params.nombre;
  act.activo = true;

  act.save((err, actStored) => {
    if(err){
      res.status(500).send({ message: 'Error en el servidor para guardar la actividad'});
    }else{
      if(!actStored){
        res.status(404).send({ message: 'Error al guardar la actividad'});
      }else{
        res.status(200).send({actStored});
      }
    }
  });
}

module.exports = {
  saveActividad
}
