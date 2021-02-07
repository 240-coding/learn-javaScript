var checkbx = document.querySelectorAll(".checkbx");
var sum = 0;

document.querySelector(".price").value = "24000원";

for (var i = 0; i < checkbx.length; i++) {
    checkbx[i].addEventListener("click", function () {
        if (this.checked) {
            sum += Number(this.value)
        }
        else {
            sum -= Number(this.value);
        }
        document.querySelector(".price").value = 24000 + sum + "원";
    })
}

