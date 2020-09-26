'use strict'

var mongoose = require('mongoose');
var app =require('./app');
var port = 3900; 

mongoose.set('useFindAndModify', false);  // Desactivar métodos antiguos
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true })
  .then(() => {
    console.log('Conexion exitosa');

    // Crear servidor y ponerme a escuchar peticios http
    app.listen(port, () => {
      console.log("servidor corriendo en http://localhost:" + port);
    });
  });
