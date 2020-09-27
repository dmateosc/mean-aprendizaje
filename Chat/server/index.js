'use strict'
//configuración basica e importante
var express = require('express');
var app = express();
var server = require('http').Server(app);

//Permitirá la escucha por puertos
var io = require('socket.io')(server);

app.use(express.static('client'));

io.on('connection', (socket) => {
    console.log("Me he conectado"+socket.handshake.address);
});

app.get('/hola-mundo',(req, res)=>{
    
    return res.status(200).send("Esto es una ruta");
})

server.listen(6677,()=>{
    console.log("El servidor está escuchando");
})