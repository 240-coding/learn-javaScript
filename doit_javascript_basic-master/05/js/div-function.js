function add(a, b) {
    var sum = a + b;
    return sum;
}

var num1 = Number(prompt("숫자1 입력"));
var num2 = Number(prompt("숫자2 입력"));

var result = add(num1, num2);

document.write("결과 : " + result);