const net = require("net");
const { connect } = require("./client");
const { setUpInput, setupInput } = require('./input');


console.log("Connecting ...");

setupInput(connect());