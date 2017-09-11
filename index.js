var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server,{path:'/whiteboard/socket.io'});
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(express.static(__dirname + '/public'));

server.listen(port, ip);
console.log("started at    "+ip+":"+port)

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

io.on('connection', onConnection);