function updateDate() {
  var date = new Date();
  var ido = date.getFullYear()+". "+(date.getMonth()+1)+". "+date.getDate()+". " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return ido;
}

function createHarmadikF() {
  document.writeln("<div id='3feladat'>");
  document.writeln("<h1>3. feladat</h1>");
  document.writeln("<p id='ido'>Jelenlegi idő: "+updateDate()+"</p>");
  document.writeln("<button onclick='document.getElementById(\"ido\").innerHTML = \"Jelenlegi idő: \"+updateDate()+\"\"'>Idő frissítése</button>");
  document.writeln("</div>");
}

function createOtodikF() {
  document.writeln("<div id='5feladat'>");
  document.writeln("<h1>5. feladat</h1>")
  document.writeln("<button onclick='otodikf();'>Ötödik feladat</button>");
  document.writeln("<br/>");
  document.writeln("</div>");
}

function createHatodikF(){
  document.writeln("<div id='6feladat'>");
  document.writeln("<h1>6. feladat</h1>")getNumberFromUser
  document.writeln("<button onclick='hatodikf();'>Hatodik feladat</button>");
  document.writeln("<br/>");
  document.writeln("</div>");
}

function createHetedikF() {
  document.writeln("<div id='7feladat'>");
  document.writeln("<h1>7. feladat</h1>")
  document.writeln("<button onclick='hetedikf();'>Hetedik feladat</button>");
  document.writeln("<br/>");
  document.writeln("</div>");
}

function hetedikf() {
    var szelesseg = 10;
    var hossz = 10;
    var mag = 0.2;

    var ermeMeret = 2;
    var ermeVastagsag = 0.2;

    return Math.floor(szelesseg / ermeMeret) * Math.floor(hossz / ermeMeret) * Math.floor(mag / ermeVastagsag);

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

function otodikf() {
  var array = [];
  //array.unshift();
  for (var i = 0; i < 5; i++) {
    var be = false;
    while (be == false) {
      be = getIntFromUser("Kérem az "+(i+1)+". számot.");

      if(be === false){
        alert("Hibás beadott adat.");
      }else array.push(be);

    }
  }

  for (var i = 0; i < array.length; i++) {
    document.getElementById('5feladat').innerHTML += "<span>"+array[i]+" * 2 = "+(array[i]*2)+"</span><br>";
  }
}

function getIntFromUser(question) {
  var be = prompt(question);
  if(be != "" && be != null) {
    if(!isNaN(be)) {
      if(isInt(be)){
        return be;
      }else return false;
    }else return false;
  }else return false;
}

function getDoubleFromUser(question) {
  var be = prompt(question);
  if(be != "" && be != null) {
    if(!isNaN(be)) {
      if(!isInt(be)){
        return be;
      }else return false;
    }else return false;
  }else return false
}

function getNumberFromUser(question) {
  var be = prompt(question);
  if(be != "" && be != null) {
    if(!isNaN(be)) {
      return be;
    }else return false;
  }else return false
}

function isInt(n) {
   return n % 1 === 0;
}
