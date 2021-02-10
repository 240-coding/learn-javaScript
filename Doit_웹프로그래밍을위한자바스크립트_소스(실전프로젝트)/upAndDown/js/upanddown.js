var comNum = Math.floor(Math.random() * 100 + 1); // 컴퓨터가 만든 숫자
var userLabel = document.querySelector("#try");
var display = document.querySelector("#display");
var counter = document.querySelector("#counter");

function playGame() {
    var userNum = Number(userLabel.value);

    if (userNum < 1 || userNum > 100) {
        alert("1~100 사이의 숫자만 입력할 수 있습니다.");
    }
    else {
        if (userNum < comNum) {
            display.innerText = "UP";
            userLabel.value = "";
        }
        else if (userNum > comNum) {
            display.innerText = "DOWN";
            userLabel.value = "";
        }
        else {
            display.innerText = "맞힘";
        }
    }
}
