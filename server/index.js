const express = require('express')
const app = express()

// DB
// const db_info = require('../conf/db_info')
// const conn = db_info.init()

//모듈
const bodyParser = require('body-parser'), serveStatic = require('serve-static'), path = require('path')
const passport = require('passport')
const ejs = require('ejs')

app.use(bodyParser.urlencoded({extend:false}))

app.use(bodyParser.json())

app.set('view engine', ejs) //ejs 사용
ejs.render(serveStatic(path.join(__dirname, '../views')))

app.use('/', serveStatic(path.join(__dirname, '../views'))) //메인 주소

app.use('/user', serveStatic(path.join(__dirname, '../views/user'))) //유저 관리 주소

//라우터
const user_info = require('./routes/user')
app.use('/api', user_info)

const db_test = require('./routes/admin')
app.use('/admin', db_test)





app.listen(80, () => {
    console.log(`Example app listening at http://anhye0n.me`)
})
