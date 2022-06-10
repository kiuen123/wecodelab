var express = require("express");
var database = require("./db.js");
var app = express();

var currentdate = new Date();
var datetime =
    currentdate.getDate() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getFullYear() +
    "_" +
    currentdate.getHours() +
    "-" +
    currentdate.getMinutes() +
    "-" +
    currentdate.getSeconds();

app.get("/api/get", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    database.get(function (data) {
        console.log(data);
        res.send(data);
    });
});

app.post("/api/add", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    database.add(req.body.w, req.body.per, datetime, function (data) {
        console.log(data);
        res.send(data);
    });
});

app.listen(3001);
