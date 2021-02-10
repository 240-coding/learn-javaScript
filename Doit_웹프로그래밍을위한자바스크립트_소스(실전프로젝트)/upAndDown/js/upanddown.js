var comNum = Math.floor(Math.random() * 100 + 1); // 컴퓨터가 만든 숫자
var userLabel = document.querySelector("#try");
var display = document.querySelector("#display");
var counter = document.querySelector("#counter");
var tryCount = 0; // 시도 횟수

userLabel.onkeydown = function(e) {
    if (e.keyCode == 13 || e.which == 3) {
        playGame();
        return false;
    }
}

function playGame() { // 확인 버튼 클릭시 실행
    var userNum = Number(userLabel.value); // 사용자가 입력한 숫자

    if (userNum < 1 || userNum > 100) { // 범위를 넘어선 경우
        alert("1~100 사이의 숫자만 입력할 수 있습니다.");
    }
    else {
        if (userNum < comNum) { // 정답보다 작은 경우
            display.innerText = "UP";
        }
        else if (userNum > comNum) { // 정답보다 큰 경우
            display.innerText = "DOWN";
        }
        else { // 정답을 맞힌 경우
            display.innerText = "맞힘";
        }
    }
    userLabel.value = "";
    counter.innerText = "시도 횟수 : " + ++tryCount + "회";
}
