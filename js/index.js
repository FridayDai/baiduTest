var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");

var radio1_info = document.getElementById("radio1_info");
var radio2_info = document.getElementById("radio2_info");

function clickRadio1(obj) {
    if(radio2_info.className.indexOf("hidden") == -1) {
        radio2_info.className += " " + "hidden";
    }
    radio2.checked = false;

    if(obj.checked == true && radio1_info.className.indexOf("hidden")>-1) {
        radio1_info.className = radio1_info.className.replace(/\ hidden/,"");
    }
}

function clickRadio2(obj) {
    if(radio1_info.className.indexOf("hidden") == -1) {
        radio1_info.className += " " + "hidden";
    }
    radio1.checked = false;

    if(obj.checked == true && radio2_info.className.indexOf("hidden")>-1) {
        radio2_info.className = radio2_info.className.replace(/\ hidden/,"");
    }
}

var cities = new Object();
cities['beijing']=new Array('石家庄', '张家口市', '承德市', '秦皇岛市', '唐山市', '廊坊市', '保定市', '沧州市', '衡水市', '邢台市', '邯郸市');
cities['nanjing']=new Array('太原市', '大同市', '朔州市', '阳泉市', '长治市', '晋城市', '忻州地区', '吕梁地区', '晋中市', '临汾地区', '运城地区');

function set_city(city, school)
{
    var cv, sv;
    var i, ii;

    cv=city.value;
    sv=school.value;

    school.length=1;

    if(cv=='0') return;
    if(typeof(cities[cv])=='undefined') return;

    for(i=0; i<cities[cv].length; i++)
    {
        ii = i+1;
        school.options[ii] = new Option();
        school.options[ii].text = cities[cv][i];
        school.options[ii].value = cities[cv][i];
    }

}
