var express = require('express');
var server = express();

console.log('starting server ...');
server.use('/', express.static(__dirname + '/app/'));
server.listen(8080);

console.log('server running, open http://localhost:8080 in web browser');
