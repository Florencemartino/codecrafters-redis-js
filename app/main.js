const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {

  let client;

  if (!client) {
    client = net.createConnection(6379, "127.0.0.1", () => {
    console.log('Socket created.');
      // 'connect' listener.

    });
  }


  client.on('data', (data) => {

    connection.write('+PONG\r\n');
    console.log(data.toString());
    client.end();
  });

  client.on('end', () => {
    console.log('disconnected from server');
  });

});

server.listen(6379, "127.0.0.1");
