'use strict'
var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var TiendaSchema = Schema({
    nombre: String,
    descripcion: String,
    local: Number,
    ubicacion: String,
    imagen: String
});

module.exports = mongoose.model('Tiendas', TiendaSchema);