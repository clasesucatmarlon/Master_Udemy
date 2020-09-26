'use strict'
// Creando servidor web con Express

// Cargar módulos de node para crear servidor web
var express = require('express');
var bodyParser = require('body-parser'); //recibir peticiones

// Ejecutar Express para trabajar http
var app = express();

// Cargar ficheros y rutas
var article_routes = require('./routes/article');

// Cargar Middlewares (se ejecuta antes de cargar una ruta o url)
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

// Cargar el CORS (Permitir peticiones desde el frontEnd)


// Añadir prefijos a rutas / cargar rutas
app.use('/', article_routes);

// Añadir ruta o método de prueba para la api

/* app.get('/datos-curso', (req, res) => {

  // var hola = req.body.hola; // prueba de post con postman
  return res.status(200).send({
    curso: 'Master en Framework en JS',
    autor: 'Marlon García',
    url: 'https://pfholberton.netlify.app/',
    // hola
  });
}); */

// Exportar módulo (Fichero actual)
module.exports = app;