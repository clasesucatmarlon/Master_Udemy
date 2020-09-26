'use strict'
// Modelo de la aplicación de un Blog

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // para usar el objeto

// Definir la estructura que van a tener cada uno de los objetos y
// documentos de este tipo que se va a guardar y usar en el backend
var ArticleSchema = Schema({
  title: String,
  content: String,
  date: {type: Date, default: Date.now},
  image: String
});

// module.exports =  mongoose.model(Nombre del modelo, esquema que va a usar )
module.exports =  mongoose.model('Article', 'ArticleSchema');
// mongoose pluraliza el modelo Article
// articles --> guarda documentos de este tipo y con estructura dentro de la colección

