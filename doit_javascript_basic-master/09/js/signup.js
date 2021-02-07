var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리로 입력하여 주십시오.");
        userId.select();
    }
};

function checkPw() {
    if (pw1.value.length < 8) {
        alert("8자리 이상으로 입력하여 주십시오.");
        pw1.value = "";
        pw1.focus();
    }
};

function comparePw() {
    if (pw1.value != pw2.value) {
        alert("비밀번호를 정확히 입력하여 주십시오.");
    }
}