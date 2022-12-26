const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {

  const client = net.createConnection(6379, "127.0.0.1", () => {
  console.log('Socket created.');
    // 'connect' listener.

  });

  console.log('connected to server!');
  connection.write('+PONG\r\n');

  client.on('data', (data) => {
    console.log(data.toString());
    client.end();
  });

  client.on('end', () => {
    console.log('disconnected from server');
  });







});

server.listen(6379, "127.0.0.1");
