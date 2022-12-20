const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  // confirm socket connection from client
  console.log((new Date()) + 'A client connected to server...');
  socket.on('data', function (connection) {
    var json = JSON.parse(connection.toString());
    console.log(json)
  });
  // send info to client
  socket.write('Echo from server: NODE.JS Server \r\n');
  socket.pipe(socket);
  socket.end();
  console.log('The client has disconnected...\n');

});

server.listen(6379, "127.0.0.1");
