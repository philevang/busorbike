window.onload=init;

function init() {
    var ibk=document.getElementById("ibk");
    var sbg=document.getElementById("sbg");
    var vn=document.getElementById("vn");
    var mins=document.getElementById("btnMinutes");

    ibk.addEventListener("click",auswahlCity,false);
    sbg.addEventListener("click",auswahlCity,false);
    vn.addEventListener("click",auswahlCity,false);
    mins.addEventListener("click",whentogo,false);

    loadWeather("Innsbruck,at");
}

function auswahlCity(){
    // class active wird zuerst bei allen buttons gelöscht und dann bei angeklicktem angehängt
    for(var i in this.parentNode.children){
        this.parentNode.children[i].className = 'button';
    }
    this.className += ' active';

    var city = "";
    if(this.id == 'ibk'){
        city = "Innsbruck,at";
    }
    else if(this.id == 'sbg'){
        city = "Salzburg,at";
    }
    else{
        city = "Vienna,at";
    }

    loadWeather(city);
}


function loadWeather(city){
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric";
    
    
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    try{
        request.send(null);
    }
    catch(e){
        alert('Kein Internet.')
    }
    console.log(request.responseText);
    //umwandeln der Textinformation in JavaScript Objekte
    var wdata = JSON.parse(request.responseText);
    console.log(wdata);
    //Zugriff auf einzelen Informationen
    //alert (wdata.name);
    
        var sunrise=wdata.sys.sunrise;
        var sunset=wdata.sys.sunset;
        var temp=wdata.main.temp;
        temp=parseFloat(temp);
        temp=Math.round(temp);
        tempfull=temp  + "°C";
        var shortdescr=wdata.weather[0].description;
        var wind=wdata.wind.speed * 3.6;
        wind=parseFloat(wind);
        wind=Math.round(wind);
        wind=wind  + " km/h"
//        var rain=wdata.rain;
        var pic="http://openweathermap.org/img/w/"+wdata.weather[0].icon+".png";
    document.getElementById("sunrise").innerHTML=sunrise;    
    document.getElementById("sunset").innerHTML=sunset;    
    document.getElementById("temp").innerHTML=tempfull;
    document.getElementById("sdescription").innerHTML=shortdescr;
    document.getElementById("wind").innerHTML=wind;
//    document.getElementById("rain").innerHTML=rain;
    document.getElementById("wpic").setAttribute("src", pic);
    
    vehicleDes(temp);
}

function vehicleDes(temp){
    var choice;
    var img=document.getElementById("imgvehicle");
    if(temp < -4){
        choice="bus";
        img=img.setAttribute("src", "bus.gif");
    }else{
        choice="bike";
        img=img.setAttribute("src", "bike.gif");
    }
    document.getElementById("vehicle").innerHTML=choice;
}

function loadCalendar() {
    var url = " ";
}

function whentogo() {
    var minsNeed = parseInt(document.getElementById("minutes").value);
    var msg = '';

    if (isNaN(minsNeed)) {
        msg = "Type in the number of minutes you need.";
    }
    else if (minsNeed <= 0) {
        msg = "You're not that fast, be honest!";
    }
    if (msg) {
        document.getElementById("msgMinutes").innerHTML = msg;
        return;
    }


}

loadCineplexxNews(){

}

