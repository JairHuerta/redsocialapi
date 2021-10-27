'use strict' //--> permite utilizar nuevas instrucciones de los nuevos estandars de javascript

var mongoose = require('mongoose'); //--> declaramos dependencia con mongoose
var app = require('./app'); //--> configuración de Express
// var port = 3800; //--> puerto estático

// mongodb+srv://jair:<password>@cluster0.jrtfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// mongodb://localhost:27017/curso_mean_social

/* Conexión DataBase */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://jair:contraseña@cluster0.jrtfu.mongodb.net/curso_mean_social?retryWrites=true&w=majority', {useNewUrlParser: true}) //--> definimos la conexión con la base de datos
		.then(() => {  //--> conexión correcta
			console.log("La conexión a la base de datos realizada conrrectamente!!!");

			/* Crear Servidor */
			app.listen(process.env.PORT || 3800, () => {
				console.log("Servidor corriendo en el puerto 3800");
			});

		})
		.catch(err => console.log(err));  //--> conexión fallida
