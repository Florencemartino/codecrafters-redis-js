const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {

  console.log('New Client connected')

  connection.on('data', data => {

    const test = data.toString()

    const word = test.split('\r\n')[4]

    if (!word) {
      return connection.write('+PONG\r\n')
    }

    const testtest = `+` + word + `\r\n`

    return connection.write(testtest)
  })

  connection.on('end', () => {
    console.log('Client left')
  })
});


server.listen(6379, "127.0.0.1");
