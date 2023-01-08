const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {

  console.log('New Client connected')

  connection.on('data', data => {

    const dataToString = data.toString()



    const command = dataToString.split('\r\n')[2]

    console.log('command', command)

    if (command === 'ping') {
      return connection.write('+PONG\r\n')
    }

    if (command === 'ECHO') {
      const word = dataToString.split('\r\n')[4]
      const wordRest = `+` + word + `\r\n`
      return connection.write(wordRest)
    }

    if (command === 'SET') {
      console.log('SET WIP')
    }

  })

  connection.on('end', () => {
    console.log('Client left')
  })
});


server.listen(6379, "127.0.0.1");
