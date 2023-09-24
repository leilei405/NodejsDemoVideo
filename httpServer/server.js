var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer();
server.listen(2000, () => {
    console.log('http://127.0.0.1:2000');
})

function log(value, string) {
    console.log(value, string);
}
// http://127.0.0.1:2000/user?id=222&name=zhangsan
server.on('request', (req, res) => {
    if (req.method === 'GET') {
        const { id, name }  = url.parse(req.url, true).query
        log(id, '===id===')
        log(name, '===name===')
        if (req.url == './') {
            fs.readFile('./index.html', 'utf-8', (err, data) => {
                res.write(data)
                res.end();
            })
        } else {
            fs.readFile('./demo.png', (err, data) => {
                res.end(data)
            });
        }
    } else if (req.method === 'POST') {
        
    }
})