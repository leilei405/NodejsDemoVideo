var fs = require('fs');

module.exports = {
    index(res) {
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            res.write(data)
            res.end();
        })
    },

    user(paramsData, res) {
        // 业务逻辑代码
        console.log(paramsData, '===data===');
        console.log(res, '==res==');
    }
}