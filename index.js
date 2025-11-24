/*
Este fragmento de código fue escrito a las 4 o 5 de la tarde, no estoy seguro... Bajo efectos de la anestesia por mi extracción
de médula combinados con efectos de cafeína, desesperación y un bug que solo se mostraba cuando nadie veía

No funciona si lo entiendes
No lo entiendes si funciona

Cualquier intento que mis compañeros hagan para refactorizar, solo resultará en la invocación de problemas dimensionales, loops infinitos
y un extraño parpadero en el monitor que aún no puedo explicar

Si necesitan cambiar esto, primero rezar, luego haz una copia de seguridad, y por último... suerte!
*/

//Usamos para que sea más robusto y seguro esta parte del code
'use strict'
//Variables para almacenar la libería de mongoose y el puerto
var mongoose = require('mongoose');
var port = 3600;
//Promesas Nativas de de JavaScript
mongoose.promise= global.Promise;
//Importación de express a la app
var app = require('./app');
//Conexión con la BDD
mongoose.connect('mongodb://localhost:27017/CCI')
.then(()=> {
    console.log('Conexión encontrada');
    app.listen(port,()=>{
        console.log("Conexión con la Base de Datos realizada con éxito, crack")
    })
})
.catch(err=>console.log(err));