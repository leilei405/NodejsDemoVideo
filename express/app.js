const express = require('express');
const app = express();
const { getUserList, serverDbAdd } = require('./db')

// 请求的数据格式
// app.use(express.urlencoded())
app.use(express.json())

// get
app.get('/', async (req, res) => {
    try {
        let back = await getUserList()
        res.send(back.users)
    } catch (error) {
        res.status(500).json({error})
    }
})

// post
app.post('/', async (req, res) => {
    let body = req.body
    if (!body) {
        res.status(403).json({
            error: '缺少用户信息'
        })
    }
    let jsonObj = await getUserList()
    body.id = jsonObj.users[jsonObj.users.length - 1].id + 1
    jsonObj.users.push(body)
    try {
        let newValue = await serverDbAdd(jsonObj)
        if (!newValue) {
            res.status(200).send({
                msg: '添加成功'
            })
        } 
    } catch (error) {
        res.status(500).json({
            error: 'Error 请重试!!!'
        })
    }
})

app.listen(3333, () => {
    console.log('listening on port 3333');
});
