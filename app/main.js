const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {

  connection.write('+PONG\r\n')

});

server.listen({ hostname: "127.0.0.1"});
