function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

let musiclist = document.getElementById("musiclist");
const a = (ds) => {
    // list music
    let musiclist = document.getElementById("musiclist");
    for (let i = 0; i < ds.length; i++) {
        let music = document.createElement("div");
        music.innerHTML = `
        <div class="music">
            <div class="music-name">${ds[i]}</div>
                <audio controls>
                    <source src="./musicrun/${ds[i]}" type="audio/mpeg">
                </audio>
        </div>
                `;
        musiclist.appendChild(music);
    }
};

readTextFile("./list.json", (text) => {
    let ds = Object.values(JSON.parse(text).list);
    a(ds);
});
