const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//coneccion con la base de datos
mongoose.connect(config.database);

//mensaje si esta conectada
mongoose.connection.on('connected',()=>{
 	console.log("connected are your database: "+config.database);
});

//mensaje si no se conecta, para mostrar los errores
mongoose.connection.on('error',(err)=>{
 	console.log("database error: "+ err);
});

const users = require('./routes/users');

//iniciamos la app
const app = express();

//declaramos el puerto
const port = 3000;

//CORS middleware
app.use(cors());

//body-parser middleware
app.use(bodyParser.json());

app.use('/users', users);

//vista estatica
app.use(express.static(path.join(__dirname, 'public')));

//ruta temporal del index
app.get('/',(req, res)=>{
 	res.send("aqui estamos, hola mundo, lo resolvi y es un mal chiste :S");
});

//iniciamos el servidor
app.listen(port,()=>{
 	console.log("aplicacion corriendo en el puerto: "+port);
});

