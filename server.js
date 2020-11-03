
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//run when client connects
io.on('connect', socket => {

    socket.emit('message','Welcome to Prestons\' Chat');

    //Broadcast when a user connects
    socket.broadcast.emit('message', 'A Preston has joined the chat');

    //Runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A Preston has left the chat');
    });
// Listen for chat message
    socket.on('chatMessage', msg => {
        io.emit('message', msg);
    });

});
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));