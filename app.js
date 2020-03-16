var http = require('http');

var server =http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello World!\n');
});

server.listen(1337);