$(document).ready(function(){
    $('.details-toggle').change(function(){
        if(this.checked){
            $(this).closest('tr').next('.details-row').find('.info').show();
        } else {
            $(this).closest('tr').next('.details-row').find('.info').hide();
        }
    });
});

let mo = [];

function AddToCart(price, quantity, name) {
    var et = {
        price: price,
        quantity: quantity,
        name: name,
    };
    mo.push(et);
    upd();
}

function bb() {
    document.getElementById("complet").style.display = "block";
}

let ho = document.getElementById('shraa');
ho.onclick = function (co) {
    window.alert('تم الشراء');
}

function refreshCaptcha() {
    var newCaptcha = generateCaptcha();
    document.getElementById("captcha").innerText = newCaptcha;
}

function generateCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

document.addEventListener("DOMContentLoaded", function () {
    refreshCaptcha();
});