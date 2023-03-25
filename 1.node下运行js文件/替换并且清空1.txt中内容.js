var fs = require('fs');

fs.writeFile('./1.txt','我写入的内容', function(err){
    // err 错误信息  没有执行错误则会输出null
    // 这里只有一个参数  成功就是成功了 
    console.log(err);
})