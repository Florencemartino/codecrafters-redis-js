const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {

  console.log('New Client')

  connection.on('data', data => {
    console.log(data + '\r\n')
    connection.write('+PONG\r\n')
  })

  connection.on('end', () => {
    console.log('Client left')
  })
});


server.listen(6379, "127.0.0.1");
