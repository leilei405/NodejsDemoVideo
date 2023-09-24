var fs = require('fs');
var url = require('url');
var controaller = require('./comtroller')
module.exports = (req, res) => {
    if (req.method == 'GET') {
        const { id, name }  = url.parse(req.url, true).query        
        if (req.url == '/') {
            controaller.index(res)
        } else {
            fs.readFile('./demo.png', (err, data) => {
                res.end(data)
            });
        }
    } else if (req.method == 'POST') {
        var str = ''
        req.on('data', (data) => {
            str += data
            console.log(str, '===data===');
        })
        req.on('end', () => {
            // 通过querystring 来解析流数据信息
            controaller.user(require('querystring').parse(str), res)
        })
        res.end()
    }
}