'use strict'

var bcrypt = require('bcrypt-nodejs');
var moment = require('moment');
var User = require('../models/user');
var jwt = require('../services/jwt');

function updateUser(req,res){
  var userId = req.params.id;
  var update = req.body;

  User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
    if(err){
      res.status(500).send({message: 'Error al actualizar el usuario'});
    }else{
      if(!userUpdate){
        res.status(404).send({message: 'El usuario a actualizar no existe'});
      }else{
        res.status(200).send({userUpdate});
      }
    }
  });
}


function prueba(req,res){
  res.status(500).send({message: 'asdasdas'});
}

function loginUser(req,res){
  var params = req.body;
  var email = params.email;
  var password = params.password;

  User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500).send({message: 'Error al loguear el usuario'});
      }else{
        if(!user){
          res.status(404).send({message: 'El usuario no existe en la BD'});
        }else{
          //Comprobar contraseñaf
          bcrypt.compare(password, user.password, (err, check) => {
            if(check){
              if(params.gethash){
                //Devolver Token
                res.status(200).send({
                  token: jwt.createToken(user)
                });
              }else{
                res.status(200).send({ usuario: user});
              }
            }else{
              res.status(404).send({message: 'La contraseña es incorrecta'});
            }
          });
        }
      }
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
  if(params.fechaNacimiento != null){
    user.fechaNacimiento = moment(params.fechaNacimiento, "DD/MM/YYYY").toDate();
  }
  user.sexo = params.sexo;
  user.role = params.role;
  user.activo = params.activo;
  user.localidad = params.localidad;
  user.provincia = params.provincia;
  user.domicilio = params.domicilio;

  if(params.password){
    bcrypt.hash(params.password, null, null, function(err, hash){
      user.password = hash;
      if(user.name != null && user.apellido != null && user.email != null ){
        user.save((err, userStored) => {
          if(err){
            res.status(500).send({ err: err});
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
  saveUser,
  loginUser,
  prueba,
  updateUser
};
