'use strict';

var jsonServer  = require('json-server');

const PORT = 8080;
const server      = jsonServer.create();
const router      = jsonServer.router(require(__dirname + '/db.js')());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, function () {
  console.log('JSON Server is running');
});