var express = require('express');
var router = express.Router();

//DB
const db_info = require('../../conf/db_info')
const conn = db_info.init()

//crypto
const crypto = require('crypto')


// /api/user/register가 아닌 /user/register로 하기.
router.post('/user/register', function (req, res, next) {

    var name = req.body.user_name // 포스트 방식은 body, get 방식은 query
    var email = req.body.email
    var id = req.body.id
    var password = req.body.password

    // 암호화
    crypto.randomBytes(64, (err, buf) => {
        crypto.pbkdf2(password, buf.toString("base64"), 100, 64, 'sha512', (err, key) => {
            var de_password = key.toString("base64")
            var user_salt = buf.toString("base64")

            var user_regi = [name, email, id, de_password, user_salt]

            var sql = "INSERT INTO user_info (name, email, id, password, user_salt) VALUES (?, ?, ?, ?, ?)";

            conn.query(sql, user_regi, function (err, result) {
                if (err) {
                    console.log('query is not excuted. insert fail...\n' + err);
                } else {
                    console.log('Success Insert!')
                    res.redirect('http://anhye0n.me/user/regi_success.html')
                }
            });
        })
    })


});
//
// router.get('/api/user/login', function (req, res, next) {
//     var sql = 'INSERT INTO user_info (name, email, id, password) VALUES (\'Company Inc\', \'Highway 37\', \'asdf\')';
//
//     conn.query(sql, function (err, result) {
//         if (err) console.log('query is not excuted. select fail...\n' + err);
//         console.log('Success Insert!' + result)
//     });
// });

module.exports = router;