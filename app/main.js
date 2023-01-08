const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const hash = {}

const server = net.createServer((connection) => {

  console.log('New Client connected')

  connection.on('data', data => {

    const bufferToString = data.toString()

    const command = bufferToString.split('\r\n')[2]

    if (command.toLowerCase() === 'ping') {
      return connection.write('+PONG\r\n')
    }

    if (command.toLowerCase() === 'echo') {
      const word = bufferToString.split('\r\n')[4]
      const wordRest = `+` + word + `\r\n`
      return connection.write(wordRest)
    }

    if (command.toLowerCase() === 'set') {
      const key = bufferToString.split('\r\n')[4]
      const value = bufferToString.split('\r\n')[6]

      hash[key] = value

      return connection.write('+OK\r\n')
    }

    if (command.toLowerCase() === 'get') {
      const key = bufferToString.split('\r\n')[4]

      return connection.write(`+${hash[key]}\r\n`)
    }

  })

  connection.on('end', () => {
    console.log('Client left')
  })
});


server.listen(6379, "127.0.0.1");
