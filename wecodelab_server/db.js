var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "heartdisease",
});

var connect = function () {
    connection.connect(function (err) {
        if (!err) {
            console.log("db connect ok");
        } else {
            console.log("db connect fail");
        }
    });
};

var close = function () {
    connection.end(function (err) {
        if (!err) {
            console.log("db close");
        } else {
            console.log("db close fail");
        }
    });
};

exports.get = function (data, callback) {
    connect();
    connection.query(
        "SELECT * FROM `logic` ORDER BY `%` DESC LIMIT 1",function (err, res, fields) {
            if (!err) {
                callback(res);
            } else {
                console.log(err);
            }
        }
    );
}

exports.add = function (w,per,date, callback) {
    connect();
    connection.query(
        `INSERT INTO logic(w, %, updateon) VALUES (${w},${per},${date})`,
        function (err, res, fields) {
            if (!err) {
                callback(res);
            } else {
                console.log(err);
            }
        }
    );
}