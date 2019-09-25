function createHatodikF(){
    document.writeln("<div id='6feladat'>");
    document.writeln("<h1>6. feladat</h1>").getNumberFromUser
    document.writeln("<button onclick='hatodikf();'>Hatodik feladat</button>");
    document.writeln("<br/>");
    document.writeln("</div>");
}

load(){
    createHatodikF();
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

function hatodikf() {
    while(true) {
      var be = getDoubleFromUser("Kérek egy lebegőpontos számot.");
  
      if(be === false) alert("Hibás megadott adat!");
      else {
        document.getElementById('6feladat').innerHTML += "<p>"+be+" kerekítve: "+Math.round(be)+"</p>";
        break;
      }
    }
  }