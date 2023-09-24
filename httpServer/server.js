var http = require('http');
var router = require('./router')

var server = http.createServer();
server.listen(2000, () => {
    console.log('http://127.0.0.1:2000');
})


server.on('request', (req, res) => {
    router(req, res)
})