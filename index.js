import express from "express";
import autochangeip from "./component/autochangeip.js";
import path from "path";
import { fileURLToPath } from "url";

console.clear(); // xóa console
// khai báo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();
let sec = 1000;
let secofmin = 60;
let timetoUpdate = 1; //time to update IP (min)

// change ip
setInterval(async () => {
    autochangeip();
}, timetoUpdate * secofmin * sec);

// static file
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start app
app.listen(80, () => {
    console.log("working on port 80!");
});
