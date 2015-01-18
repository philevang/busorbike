window.onload=init;

function init() {
    var ibk=document.getElementById("ibk");
    var sbg=document.getElementById("sbg");
    var vn=document.getElementById("vn");

    ibk.addEventListener("click",auswahlCity,false);
    sbg.addEventListener("click",auswahlCity,false);
    vn.addEventListener("click",auswahlCity,false);

    loadWeather("Innsbruck,at");
}

function auswahlCity(){
    // if (ibk.onclick){
    //     url="http://api.openweathermap.org/data/2.5/weather?q=Innsbruck,at&units=metric"
    // }
    // if (sbg.onclick){
    //     url="http://api.openweathermap.org/data/2.5/weather?q=Salzburg,at&units=metric"
    // }
    // if (vn.onclick){
    //     url="http://api.openweathermap.org/data/2.5/weather?q=Wien,at&units=metric"
    // }
    
    //das ist eine Änderung

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
    request.send(null);
    console.log(request.responseText);
    //umwandeln der Textinformation in JavaScript Objekte
    var wdata = JSON.parse(request.responseText);
    console.log(wdata);
    //Zugriff auf einzelen Informationen
    //alert (wdata.name);
    
        var city=wdata.name;
        var temp=wdata.main.temp + "°C";
        var wind=wdata.wind.speed;
        var sunrise=wdata.sys.sunrise;
        var sunset=wdata.sys.sunset;
        var wdescr=wdata.weather[0].description;
    document.getElementById("sunrise").innerHTML=sunrise;    
    document.getElementById("sunset").innerHTML=sunset;    
    document.getElementById("temp").innerHTML=temp;
    document.getElementById("wdescription").innerHTML=wdescr;    
    //console.log(document.getElementById("temp"));
    document.getElementById("wind").innerHTML=wind;
    
}