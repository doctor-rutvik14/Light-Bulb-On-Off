function light (value){
    var pics;
    if(value == 0){
        document.getElementById('OFF').style.backgroundColor = "#AE1438";
        document.getElementById('ON').style.backgroundColor = "#26ae60";
        document.getElementById('OFF').style.boxShadow = "inset 3px 3px 8px 1px rgba(0,0,0,0.5)";
        document.getElementById('ON').style.boxShadow = "2px 4px 0px #025f2c, 0px 3px 15px rgba(0,0,0,.4)";
        pics = "Img/light-bulb-off.png";
    }
    else{
        document.getElementById('ON').style.backgroundColor = "#218F76";
        document.getElementById('OFF').style.backgroundColor = "#E83350";
        document.getElementById('ON').style.boxShadow = "inset 3px 3px 8px 1px rgba(0,0,0,0.5)";
        document.getElementById('OFF').style.boxShadow = "2px 4px 0px #5c0101, 0px 3px 15px rgba(0,0,0,.4)";
        pics = "Img/light-bulb-on.png";
    }
    document.getElementById("bulb").src = pics;
}
