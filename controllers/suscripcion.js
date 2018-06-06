'use strict'

var User = require('../models/user');
var Actividad = require('../models/actividad');
var Suscripcion = require('../models/suscripcion');
var moment = require('moment');

function getSuscripcion(req, res){
  res.status(200).send({ message: 'Metodo getSuscripcion' });
}

function saveSuscripcion(req,res){
  var suscrip = new Suscripcion();
  var params = req.body;

  console.log(params);

  suscrip.user = params.user;
  suscrip.actividad = params.actividad;
  suscrip.estado = 'activo';
  suscrip.fechaSuscripcion = moment(new Date);
  if(params.meses != null){
    var fechaInt = parseInt(params.meses);
    suscrip.fechaVencimiento = moment(new Date()).add(params.meses, 'months');
  }
  suscrip.clasesRestante = 0;
  
  suscrip.save((err, suscripStored) => {
    if(err){
      res.status(500).send({ bdmessage: 'Error al guardar la suscripcion'});
    }else{
      if(!suscripStored){
        res.status(404).send({ message: 'No se ah podido guardar la suscripcion'});
      }else{
        res.status(200).send({suscripStored})
      }
    }
  });
}


module.exports = {
  getSuscripcion,
  saveSuscripcion
};
