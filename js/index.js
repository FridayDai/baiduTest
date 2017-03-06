/**
 * Created by xplusz on 2/27/17.
 */

function getTrueLength(str) {
    var len = 0;
    var str = str.replace(/\s/g,'');
    for(var i=0; i < str.length; i++) {
        if(str.charCodeAt(i) < 256) {
            len += 1;
        } else if (str.charCodeAt(i) >= 256) {
            len += 2;
        }
    }
    return len;
}

function showMessage(obj) {
    var hintmessage = obj.nextElementSibling;
    var nullmessage = hintmessage.nextElementSibling;
    var rightmessage = nullmessage.nextElementSibling;

    if(nullmessage.style.display == '' && rightmessage.style.display == ''){
        hintmessage.style.display = "-webkit-box";
    }
}


function verifyUsername(obj) {
    var hintmessage = obj.nextElementSibling;
    var nullmessage = hintmessage.nextElementSibling;
    var rightmessage = nullmessage.nextElementSibling;

    var username = document.getElementById("username");
    var username_length = getTrueLength(username.value);
    if(username_length == 0) {
        hintmessage.style.display = 'none';
        nullmessage.style.display = '-webkit-box';
        rightmessage.style.display = 'none';
        username.className = 'warning';
    } else if(username_length > 16 || username_length < 4) {
        hintmessage.style.display = '-webkit-box';
        nullmessage.style.display = 'none';
        rightmessage.style.display = 'none';
        username.className = 'warning';
    } else {
        hintmessage.style.display = 'none';
        nullmessage.style.display = 'none';
        rightmessage.style.display = '-webkit-box';
        username.className = 'correct';
    }

}

function verifyPassword(obj){
    var hintmessage = obj.nextElementSibling;
    var nullmessage = hintmessage.nextElementSibling;
    var rightmessage = nullmessage.nextElementSibling;

    var password = document.getElementById("password");
    //var username_length = getTrueLength(username.value);
    if(password.value.length == 0) {
        hintmessage.style.display = 'none';
        nullmessage.style.display = '-webkit-box';
        rightmessage.style.display = 'none';
        password.className = 'warning';
    } else {
        hintmessage.style.display = 'none';
        nullmessage.style.display = 'none';
        rightmessage.style.display = '-webkit-box';
        password.className = 'correct';
    }
}

function verifyPassword2(obj) {
    var hintmessage = obj.nextElementSibling;
    var nullmessage = hintmessage.nextElementSibling;
    var rightmessage = nullmessage.nextElementSibling;
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    
    if(password.value == password2.value && password2.value!=='') {
        hintmessage.style.display = 'none';
        nullmessage.style.display = 'none';
        rightmessage.style.display = '-webkit-box';
        password2.className = 'correct';
    } else {
        hintmessage.style.display = 'none';
        nullmessage.style.display = '-webkit-box';
        rightmessage.style.display = 'none';
        password2.className = 'warning';
    }
}

function verifyEmail(obj) {
    var hintmessage = obj.nextElementSibling;
    var nullmessage = hintmessage.nextElementSibling;
    var rightmessage = nullmessage.nextElementSibling;

    var email = document.getElementById("email");
    var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    if(reg.test(email.value)) {
        hintmessage.style.display = 'none';
        nullmessage.style.display = 'none';
        rightmessage.style.display = '-webkit-box';
        email.className = 'correct';
    } else {
        hintmessage.style.display = 'none';
        nullmessage.style.display = '-webkit-box';
        rightmessage.style.display = 'none';
        email.className = 'warning';
    }
}

function verifyPhone(obj) {
    var hintmessage = obj.nextElementSibling;
    var nullmessage = hintmessage.nextElementSibling;
    var rightmessage = nullmessage.nextElementSibling;

    var phone = document.getElementById("phone");
    var reg = /^\d{11}$/;

    var newPhone =reg.test(phone.value);

    if(reg.test(phone.value)) {
        hintmessage.style.display = 'none';
        nullmessage.style.display = 'none';
        rightmessage.style.display = '-webkit-box';
        phone.className = 'correct';
    } else {
        hintmessage.style.display = 'none';
        nullmessage.style.display = '-webkit-box';
        rightmessage.style.display = 'none';
        phone.className = 'warning';
    }
}

function onlyNum(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}