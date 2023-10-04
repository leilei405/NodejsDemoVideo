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

// put
app.put('/:id', async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    try {
        let userInfo = await getUserList()
        let userId = Number.parseInt(req.params.id)
        let user = userInfo.users.find(item => item.id === userId)
        if (!user) {
            res.status(403).json({
                error: '用户不存在'
            })
        }
        // res.send(user)
        const body = req.body
        user.username = body.username ? body.username : user.username
        user.age = body.age ? body.age : user.age
        userInfo.users[userId-1] = user
        if (!await serverDbAdd(userInfo)) {
            res.status(201).json({
                msg: '修改成功'
            })
        }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

app.listen(3333, () => {
    console.log('listening on port 3333');
});
