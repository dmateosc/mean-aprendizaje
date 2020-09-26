'use strict'
//configuración basica e importante
var express = require('express');
var app = express();
var server = require('http').Server(app);

//Permitirá la escucha por puertos
var socket = require('socket.io')(server);

app.get('/hola-mundo',(req, res)=>{
    
    return res.status(200).send("Esto es una ruta");
})

server.listen(6677,()=>{
    console.log("El servidor está escuchando");
})