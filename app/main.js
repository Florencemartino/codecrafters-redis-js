const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
// const server = net.createServer((connection) => {




// });

const server = net.createServer((c) => {
  // 'connection' listener.

  c.write('+PONG\r\n');

});
server.on('error', (err) => {
  throw err;
});

server.listen(6379, "127.0.0.1");
