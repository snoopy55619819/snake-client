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