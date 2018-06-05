'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/surfit', (err, res)=>{
  if(err){
    throw err;
  }else{
    console.log('La conexion a la base esta funcionando correctamente');

    app.listen(port, function(){
      console.log("Servidor del api rest del gym escuchando en http://localhost:"+port);
    });
  }
});
