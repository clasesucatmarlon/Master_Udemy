'use strict'

var express = require('express');

// cargar e controlador creado
var ArticleController = require('../controllers/article');

var router = express.Router();

router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

module.exports = router;