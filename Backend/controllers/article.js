'use strict'

var validator = require('validator');
// var Article = require('../models/article'); */

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
      message: 'Soy la acción TEST de mi controlador de artículos'
    });
  },

  save: (req, res) => {
    // Capturar datos por post
    var params = req.body;
    console.log(params);  // Validar captura de datos

    // Validar datos (validator)
    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(200).send({
        message: 'Faltan datos por enviar !!!'
      });
    }

    if (validate_title && validate_content) {
      return res.status(200).send({
        message: 'Datos correctos'
      });
    }

    // Crear el objeto a guardar

    // Asignar valores

    // Guardar el artículo

    // Retornar respuesta

    return res.status(200).send({
      message: params
    });
  }



};

module.exports = controller;
