const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

var server = net.createServer(function (c) { //'connection' listener
  console.log('client connected');

  console.log(JSON.stringify(c))

  c.on('end', function () {
    console.log('client disconnected');
  });

  c.write('+PONG\r\n');
  // c.pipe(c);
});

server.listen(6379, "127.0.0.1");
