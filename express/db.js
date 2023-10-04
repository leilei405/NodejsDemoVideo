const fs = require('fs');
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

// 获取用户列表
exports.getUserList = async () => {
    let data = await readFile('./db.json', 'utf8')
    return JSON.parse(data)
}


// 添加用户
exports.serverDbAdd = async (data) => {
    let strData = JSON.stringify(data)
    let newUser = await writeFile('./db.json', strData)
    return newUser
}