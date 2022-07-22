import express from "express";
import autochangeip from "./backend/autochangeip.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

console.clear(); // xóa console
// khai báo biến toàn cục
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();

// // change ip
let sec = 1000;
let secofmin = 60;
let timetoUpdate = 1; //time to update IP (min)
setInterval(async () => {
    autochangeip();
}, timetoUpdate * secofmin * sec);

// static file
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "frontend")));
app.use(express.static(path.join(__dirname, "frontend/home")));
// app.use(express.static(path.join(__dirname, "frontend/music"))); // có 1 vấn đề j đó vs dòng này mà tôi ko thể hiểu dc (kiên - 22/7/2022 17:38)

// home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/home", "./home.html"));
});
// music page
app.get("/music", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/music", "./music.html"));
});

// tạo danh sách bài hát trong public/music
setInterval(() => {
    let musiclist = fs.readdirSync("./public/music/");
    let musicjson = {
        list: musiclist,
    };
    let data = JSON.stringify(musicjson);
    fs.writeFile("./frontend/music/list.json", data, "utf8", (err) => {
        if (err) {
            console.log(`Error writing file: ${err}`);
        } else {
            console.log(`File is written successfully!`);
        }
    });
}, timetoUpdate * secofmin * sec);
// listen port
app.get("/music/musicrun/:musicname", (req, res) => {
    let musicname = req.params.musicname;
    res.sendFile(path.join(__dirname, `public/music/${musicname}`));
});

app.get("/videorun/:videoname", (req, res) => {
    let videoname = req.params.videoname;
    res.sendFile(path.join(__dirname, `public/music/${videoname}`));
});

// start app
app.listen(80, () => {
    console.log("working on port 80!");
});
