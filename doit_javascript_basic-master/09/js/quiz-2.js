var radius = document.querySelector("#radius");
var round = document.querySelector("#round");
var area = document.querySelector("#area");

var start = document.querySelector("#start");
var pi = Math.PI;

start.addEventListener("click", function() {
    round.value = radius.value * 2 * pi;
    area.value = radius.value * radius.value * pi;
})
