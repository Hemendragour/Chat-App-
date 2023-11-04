const io = require( "socket.io" )();
const socketapi = {
    io: io
};
  

// Add your socket.io logic here!
io.on('connection', (socket) => {
    console.log('a user connected');
    // console.log("new" , name);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
  'alert("enter")'
  
  
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      ('message: ' + msg);
    });
  });

  io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
// end of socket.io logic

module.exports = socketapi;


