/**
 * Created by xplusz on 2/27/17.
 */

function getTrueLength(string) {
    var len = 0;
    var str = string.replace(/\s/g,''); // 去除所有空格

    for(var i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) > 256) {
            len += 2;
        } else if(str.charCodeAt(i) < 256) {
            len += 1;
        }
    }
    return len;
}


var submitBtn = document.getElementById("identify");
var input = document.getElementById("username");


submitBtn.onclick = function(e) {
    var username = input.value;
    var username_length = getTrueLength(username);

    if(username_length == 0) {
        document.getElementById("hintmessage").style.display = 'none';
        document.getElementById("nullmessage").style.display = "table-row";
        document.getElementById("rightmessage").style.display = "none";
        input.className = 'wrong';
        e.preventDefault();
    } else if (username_length < 4 || username_length > 16) {
        document.getElementById("hintmessage").style.display = 'table-row';
        document.getElementById("nullmessage").style.display = "none";
        document.getElementById("rightmessage").style.display = "none";
        input.className = 'wrong';
        e.preventDefault();
    } else {
        document.getElementById("hintmessage").style.display = 'none';
        document.getElementById("nullmessage").style.display = "none";
        document.getElementById("rightmessage").style.display = "table-row";
        input.className = 'right';
        e.preventDefault();
    }
};