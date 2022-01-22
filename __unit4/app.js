const http = require('http');

//custom file
const routes = require('./routes');

console.log(routes.someText);

//for one, syntax can simply be http.createServer(routes)
const server = http.createServer(routes.handler);

server.listen(3000);