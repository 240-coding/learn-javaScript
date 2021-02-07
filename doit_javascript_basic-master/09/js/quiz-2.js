
var start = document.querySelector("#start");
var pi = Math.PI;

start.addEventListener("click", function() {
    var radius = document.querySelector("#radius").value;

    document.querySelector("#round").value = radius * 2 * pi;
    document.querySelector("#area").value = radius * radius * pi;
})
