const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: '50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: Nik');
    conn.write('Move: up');
    // conn.write('Move: right');
    // setInterval(() => conn.write('Move: up'),50);
    // setTimeout(() => conn.write('Move: left', 150));
    // setTimeout(() => conn.write('Move: up', 200));
    // setTimeout(() => conn.write('Move: right', 250));
    console.log('Welcome to the SNE-K game!!!');
  });

  // client.js
  conn.on('data', (data) => {
    console.log('Name: ', data);
  });

  return conn;
};

module.exports = {
  connect
};