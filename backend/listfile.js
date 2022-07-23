import fs from "fs";

const musiclistfile = () => {
    let musiclist = fs.readdirSync("./public/music/");
    let musicjson = {
        list: musiclist,
    };
    let data = JSON.stringify(musicjson);
    fs.writeFileSync("./frontend/music/list.json", data, "utf8", (err) => {});
};

export { musiclistfile };
