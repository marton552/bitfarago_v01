
//12. feladat
var szamok = [];

function oszthatosag() {
    
    for(var i = 0; i < 15; i++) {
        var szam = randomSzam(0, 1000);
        szamok.push(szam);
        document.getElementById("szamok").innerHTML += szam+", ";
    }

    for(var i = 0; i < szamok.length; i++) {
        if(szamok[i] % 3 == 0) {
            document.getElementById("oszt").innerHTML += szamok[i]+" - osztható, ";
        }else document.getElementById("oszt").innerHTML += szamok[i]+" - nem osztható, ";
    }
}

function randomSzam(min, max) {
    return Math.floor(Math.random() * max) + min;
}