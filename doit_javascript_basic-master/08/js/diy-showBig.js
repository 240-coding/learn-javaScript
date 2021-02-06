var bigPic = document.querySelector("#prod-pic > img");
var smallPic = document.querySelectorAll(".small");

for (var i = 0; i < smallPic.length; i++) {
    smallPic[i].onclick = showBig;
}

function showBig() {
    bigPic.src = this.src;
}