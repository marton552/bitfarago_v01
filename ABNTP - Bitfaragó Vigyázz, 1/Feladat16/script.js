function parosTomb(tomb) {
    var array = [];
    for(var i = 0; i < tomb.length; i++) {
        if(tomb[i] % 2 == 0) array.push(tomb[i]);
    }

    return array;
}

function load() {
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

function general() {
    var eredetiTomb = [];
    var s = "";
    for(var i = 0; i < 20; i++) {
        var num = randomSzam(1, 1000);
        eredetiTomb.push(num);

        if(i == 19) s += ""+num;
        else s += num+", ";
    }

    document.getElementById("eredeti").innerHTML = s;

    var valogatottTomb = parosTomb(eredetiTomb);
    s = "";
    for(var i = 0; i < valogatottTomb.length; i++) {

        if(i == valogatottTomb.length-1) s += ""+valogatottTomb[i];
        else s += valogatottTomb[i]+", ";
    }

    document.getElementById("valogatott").innerHTML = s;


}

function randomSzam(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}