var mysql = require('mysql');
var db_info = {
    host: 'localhost',
    user: 'server_user',
    password: 'server_password',
    database: 'server_database',
    multipleStatements: true,
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    // var conn = db_config.init();
    connect: function (conn) {
        conn.connect(function (err) {
            if (err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    },
    db_info
}
