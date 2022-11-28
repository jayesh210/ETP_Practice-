const io= require('socket.io')(3000)

io.on('connection', socket =>{
socket.emit('chat-message','Hello world');
socket.on('send-chat-message', message=>{
    socket.broadcast.emit('chat-message', message);
})
})



// const express= require("express");
// const app=express();
// var port = 8080;

// app.get('/', (req, res)=>{
//     res.sendFile(__dirname+"/chatApp.html");
// });

// app.listen(port,()=>{
//     console.log("Server is hosted at " + port);
// });