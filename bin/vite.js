#! /usr/bin/env node
const { program } = require('commander');

// if (process.argv[2] === '--help') {
//     console.log('我获取到了命令行参数');
// }
// console.log('my-vite');
// console.log(process.argv);
program
  .option('-f --first <first>', 'First'); // <> 意思就是如果使用了-f 那么后面必须要跟对应的参数
  .option('-s, --separator <char>');
program.parse(process.argv);  // 命令行所有的参数选项