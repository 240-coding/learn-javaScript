var isCalc = true; // 섭씨 -> 화씨(기본값)

document.querySelector("#exchange").onclick = function() { // 화살표 버튼 클릭시
    isCalc ? isCalc = false : isCalc = true; // 현재 상태 변경
    if (isCalc == true) { // 섭씨 -> 화씨인 경우
        document.querySelector("#s-unit").innerHTML = "&#8451;"; // 기호 변경
        document.querySelector("#t-unit").innerHTML = "&#8457;";
    }
    else { // 화씨 -> 섭씨인 경우
        document.querySelector("#s-unit").innerHTML = "&#8457;";
        document.querySelector("#t-unit").innerHTML = "&#8451;";
    }
    document.querySelector("#s-value").value = ""; // 입력창 비워줌
    document.querySelector("#t-value").value = "";
}

document.querySelector("#s-value").onkeyup = function() { // 사용자가 값 입력시
    if (isCalc == true) { // 섭씨 -> 화씨인 경우
        var degree = document.querySelector("#s-value").value;
        var result = degree * 1.8 + 32; // 계산한 결과
        document.querySelector("#t-value").value = result.toFixed(2); // 결과 표시
    }
    else { // 화씨 -> 섭씨인 경우
        var degree = document.querySelector("#s-value").value;
        var result = (degree - 32) / 1.8;
        document.querySelector("#t-value").value = result.toFixed(2);  
}
}


