'use strict'

// Definir el objeto y todos los métodos que va a tener la Api

var controller = {

  datosCurso: (req, res) => {
    var hola = req.body.hola; // prueba de post con postman
    return res.status(200).send({
      curso: 'Master en Framework en JS',
      autor: 'Marlon García',
      url: 'https://pfholberton.netlify.app/',
      hola
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: 'Soy la acción test de mi controlador de artículos'
    });
  }
};

module.exports = controller;
