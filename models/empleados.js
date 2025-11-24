'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema

var EmpleadosSchema = Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    tipoSangre: String,
    seguroMedico: String,
    correo: String,
    contrasenia: String
});

module.exports = mongoose.model('Empleados', EmpleadosSchema);