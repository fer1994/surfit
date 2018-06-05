'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');

function pruebas(req, res){
  res.status(200).send({
    message: 'Probando una accion del controlador api rest con NODE'
  });
}

function saveUser(req,res){
  var user = new User();
  var params = req.body;

  console.log(params);

  user.name = params.name;
  user.apellido = params.apellido;
  user.email = params.email;
  user.documento = params.documento;
  user.fechaNacimiento = params.fechaNacimiento;
  user.sexo = params.sexo;
  user.role = params.role;
  user.activo = params.activo;
  user.domicilio = null;

  if(params.password){
    bcrypt.hash(params.password, null, null, function(err, hash){
      user.password = hash;
      if(user.name != null && user.apellido != null && user.email != null ){
        user.save((err, userStored) => {
          if(err){
            res.status(500).send({ message: 'Error al guardar el usuario'});
          }else{
            if(!userStored){
              res.status(404).send({ message: 'No se registro correctamente el usuario'});
            }else{
              res.status(200).send({user: userStored});
            }
          }
        });
      }else{
        res.status(200).send({ message: 'Todos los datos son obligatorios'});
      }
    });

  }else{
    res.status(500).send({ message: 'La contraseña es obligatoria'});
  }


}

module.exports = {
  pruebas,
  saveUser
};
