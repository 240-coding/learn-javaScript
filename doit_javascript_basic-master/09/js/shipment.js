var nameInfo = document.querySelector("#billingName").value;
var telInfo = document.querySelector("#billingTel").value;
var addrInfo = document.querySelector("#bilingAddr").value;

var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function() {
    if (check.checked == true) {
        document.querySelector("#shippingName").value = nameInfo;
        document.querySelector("#shippingTel").value = telInfo;
        document.querySelector("#shippingAddr").value = addrInfo;
    }
    else {
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});