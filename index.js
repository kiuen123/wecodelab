import express from "express";
import autochangeip from "./backend/autochangeip.js";
import path from "path";
import { fileURLToPath } from "url";

console.clear(); // xóa console
// khai báo biến toàn cục
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();

// change ip
let sec = 1000;
let secofmin = 60;
let timetoUpdate = 1; //time to update IP (min)
// setInterval(async () => {
//     autochangeip();
// }, timetoUpdate * secofmin * sec);

// static file
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "frontend")));

// home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "./home/home.html"));
});

// start app
app.listen(80, () => {
    console.log("working on port 80!");
});
