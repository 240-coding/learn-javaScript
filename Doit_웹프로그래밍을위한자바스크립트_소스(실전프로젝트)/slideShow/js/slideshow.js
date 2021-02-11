var imgs = document.querySelectorAll("img");
var index = 0;

for (var i = 0; i < imgs.length; i++) { // 모든 이미지를 숨김
    imgs[i].style.display = "none";
}

imgs[index].style.display = "block"; // 하나의 이미지만 보이게 함

document.querySelector("#prev").onclick = function() { // 이전 버튼 클릭시
    imgs[index].style.display = "none"; // 원래 이미지 숨김
    if (index == 0) {
        index = imgs.length - 1;
    }
    else {
        index--;
    }
    imgs[index].style.display = "block"; // 이전 이미지 보임
}

document.querySelector("#next").onclick = function() { // 다음 버튼 클릭시
    imgs[index].style.display = "none";
    if (index == imgs.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    imgs[index].style.display = "block";
}