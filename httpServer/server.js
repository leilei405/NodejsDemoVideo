// 1. 导入http模块
var http = require('http');
var fs = require('fs');

// 2. 创建服务器
// 获取到服务器的实例对象
var server = http.createServer();
server.listen(2000, () => {
    console.log('http://127.0.0.1:2000');
})


// 3. 监听客户端的事件
// req 请求信息
// res 响应的信息
server.on('request', (req, res) => {
    // console.log('request 接收到了');
    // res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');  // html
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8');  // 纯文本
    // res.write('<h1>你好</h1>')
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
    
    // res.end()
})