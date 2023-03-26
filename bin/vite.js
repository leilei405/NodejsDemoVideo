#! /usr/bin/env node

if (process.argv[2] === '--help') {
    console.log('我获取到了命令行参数');
}
console.log('my-vite');
console.log(process.argv);