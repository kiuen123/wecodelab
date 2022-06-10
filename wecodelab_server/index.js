var express = require("express");
var database = require("./db.js");
var app = express();

app.get("/api/get", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    database.get(function (data) {
        console.log(data);
        res.send(data);
    });
});

app.get("/api/add", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    database.add(req.query.w, req.query.per, req.query.date, function (data) {
        console.log(data);
        res.send(data);
    });
});

app.listen(3001);
