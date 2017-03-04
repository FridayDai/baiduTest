/**
 * Created by xplusz on 2/27/17.
 */


var showMessage = function(obj) {
    var hintmessage = obj.nextElementSibling;
    hintmessage.style.display = "table-row";
};

var hideMessage = function(obj) {
    var hintmessage = obj.nextElementSibling;
    hintmessage.style.display = "none";
};
