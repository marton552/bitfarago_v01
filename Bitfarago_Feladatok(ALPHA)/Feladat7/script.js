function hetedikf() {
    var szelesseg = document.getElementById("a").value * 1;
    var hossz = document.getElementById("b").value * 1;
    var mag = document.getElementById("c").value * 1;

    var ermeMeret = 2;
    var ermeVastagsag = 0.2;

    document.getElementById("eredmeny").innerHTML = Math.floor(szelesseg / ermeMeret) * Math.floor(hossz / ermeMeret) * Math.floor(mag / ermeVastagsag) + "db fér bele";

}