const delay = ms => new Promise(res => setTimeout(res, ms));

async function about() {
    document.getElementById("main").style["animation-name"] = "fadeout";
    await delay(1000);
    window.location.href = "about.html"
}

async function main() {
    document.getElementById("about").style["animation-name"] = "fadeout";
    await delay(1000);
    window.location.href = "index.html"
}