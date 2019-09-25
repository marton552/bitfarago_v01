function hetedikf() {
    var szelesseg = document.getElementById("a").value * 1;
    var hossz = document.getElementById("b").value * 1;
    var mag = document.getElementById("c").value * 1;

    var ermeMeret = 2;
    var ermeVastagsag = 0.2;

    document.getElementById("eredmeny").innerHTML = Math.floor(szelesseg / ermeMeret) * Math.floor(hossz / ermeMeret) * Math.floor(mag / ermeVastagsag) + "db fér bele";
}

function load(){
    background();
}

function background(){
    var styleNumber = Math.floor(Math.random()*8)+1;

    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "../stylok/style"+styleNumber+".css");
    document.getElementsByTagName("head")[0].appendChild(element);
}