const express = require('express');
const fs = require('fs');
const { promisify } = require('util')
const app = express();

const readFile = promisify(fs.readFile)

// 请求的数据格式
app.use(express.urlencoded())
app.use(express.json())

// get
app.get('/', async (req, res) => {
    try {
        const back = await readFile('./db.json', 'utf8')
        const jsonObj = JSON.parse(back)
        res.send(jsonObj.users)
    } catch (error) {
        res.status(500).json({error})
    }
})

// post
app.post('/', async (req, res) => {
    try {
        console.log(req.headers);
        console.log(req.body);
    } catch (error) {
        
    }
})

app.listen(3333, () => {
    console.log('listening on port 3333');
});