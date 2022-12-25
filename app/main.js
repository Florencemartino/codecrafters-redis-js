const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {

    const socket = net.createConnection(6379, "127.0.0.1");
    console.log('Socket created.');
    socket.on('data', function (data) {
      // Log the response from the HTTP server.
      console.log('RESPONSE: ' + data);
    }).on('connect', function () {
      // Manually write an HTTP request.
      socket.write("GET / HTTP/1.0\r\n\r\n");
    }).on('end', function () {
      console.log('DONE');
    });
    connection.write('+PONG\r\n');
    console.log('connected to server!');

});

server.listen(6379, "127.0.0.1");
