'use strict'

var express = require('express');

// cargar e controlador creado
var ArticleController = require('../controllers/article');

var router = express.Router();

// Rutas de test
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

// Rutas útiles (artículos)
router.post('/save', ArticleController.save);

module.exports = router;