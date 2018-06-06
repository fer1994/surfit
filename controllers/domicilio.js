'use strict'

var Domicilio = require('../models/domicilio');

function saveDomicilio(req,res){
  var domicilio = new Domicilio();
  var params = req.body;

  console.log(params);

  domicilio.direccion = params.direccion;
  domicilio.numero = params.numero;
  domicilio.departamento = params.departamento;
  domicilio.numDpto = params.numDpto;
  domicilio.localidad = params.localidad;
  domicilio.provincia = params.provincia;

  if(domicilio.direccion != null && domicilio.numero != null && domicilio.localidad){
      domicilio.save((err, domicilioStored) => {
        if(err){
          res.status(500).send({ err: err});
        }else{
          if(!domicilioStored){
            res.status(404).send({ message: 'Error al generar el domicilio'});
          }else{
            res.status(200).send({domicilio: domicilioStored});
          }
        }
      });
  }else{
    res.status(500).send({ message: 'Todos los datos son obligatorios'});
  }

}

module.exports = {
  saveDomicilio
};
