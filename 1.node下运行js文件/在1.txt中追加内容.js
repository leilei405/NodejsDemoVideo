var fs = require('fs')

// 1.先读取到文件内容
fs.readFile('./1.txt','utf8', function(err, data) {
  if(!err){  // 取反  没有错误的情况
    // 2.然后将读取到的内容与写入的内容进行一个拼接
    var newData = data + '  嘿嘿--这是我要追加的内容';
    fs.writeFile('./1.txt', newData, function(err) {
      if (!err) {
        console.log('追加成功');
      }
    })
  }
})