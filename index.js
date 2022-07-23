import express from "express";
import autochangeip from "./backend/autochangeip.js";
import { musiclistfile } from "./backend/listfile.js";
import path from "path";
import { fileURLToPath } from "url";

console.clear(); // xóa console
// khai báo biến toàn cục
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();

// set time to update
let sec = 1000;
let secofmin = 60;
let timetoUpdate = 1; //time to update (min)

// // change ip
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
clearTimeout(() => {
    musiclistfile();
}, timetoUpdate * sec);
// listen port
app.get("/music/run/:musicname", (req, res) => {
    let musicname = req.params.musicname;
    res.sendFile(path.join(__dirname, `public/music/${musicname}`));
});

app.get("/video/run/:videoname", (req, res) => {
    let videoname = req.params.videoname;
    res.sendFile(path.join(__dirname, `public/music/${videoname}`));
});

const mimeType = {
    ".ico": "image/x-icon",
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".wav": "audio/wav",
    ".mp3": "audio/mpeg",
    ".svg": "image/svg+xml",
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".eot": "application/vnd.ms-fontobject",
    ".ttf": "application/font-sfnt",
};

// start app
app.listen(80, () => {
    console.log("working on port 80!");
});
