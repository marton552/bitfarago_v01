var x = 20;
var fel = "";
var bal = "";
var jobb = "";
var le = "";

function play() {
    if (x < 700) {

        x += 10;
        if (x === 700) {
            document.getElementById("irany").style.display = "inline";
        } else if (x > 180) {
            document.getElementById("box").style.top = 28 - (x / 30) + "vh";
            document.getElementById("play").style.height = x / 10 + "vh";
            setTimeout(play, 10);
        } else if (x === 180) {
            document.getElementById("play").style.transform = "rotateX(0deg)";
            document.getElementById("pl").innerHTML = "";

            document.getElementById("play").style.height = x / 30 + "vw";
            setTimeout(play, 10);
        } else if (x === 170) {
            setTimeout(play, 300);
        } else {
            document.getElementById("play").style.transform = "rotateX(" + x + "deg)";
            setTimeout(play, 10);
        }
    }
}

var playericon = "a";
var nehezseg = "";
var xx = 5;
var szel = 28;
var leftX = 0;
var fontX = 3;

function check2() {
    if (nehezseg !== "" && playericon !== "a") {
        document.getElementById("now").style.display = "inherit";
    }
}

function a(w) {
    if (w === "a") playericon = "orange";
    if (w === "b") playericon = "aqua";
    if (w === "c") playericon = "greenyellow";
    if (w === "d") playericon = "grey";
    document.getElementsByClassName('plw')[0].style.fontSize = "3vw";
    document.getElementsByClassName('plw')[1].style.fontSize = "3vw";
    document.getElementsByClassName('plw')[2].style.fontSize = "3vw";
    document.getElementsByClassName('plw')[3].style.fontSize = "3vw";
    document.getElementById(w + "").style.fontSize = "4vw";
    check2();
}

function easy() {
    document.getElementById("easy").style.backgroundColor = "red";
    document.getElementById("easy").style.opacity = 1;
    document.getElementById("hard").style.backgroundColor = "white";
    document.getElementById("hard").style.opacity = 0.5;
    nehezseg = "easy";
    check2();
}

function hard() {
    document.getElementById("hard").style.backgroundColor = "red";
    document.getElementById("hard").style.opacity = 1;
    document.getElementById("easy").style.backgroundColor = "white";
    document.getElementById("easy").style.opacity = 0.5;
    nehezseg = "hard";
    check2();
}

function tulnagy() {
    document.getElementById("mez1").style.backgroundColor = "red";
    setTimeout(tulnagy2, 300);
}

function tulnagy2() {
    document.getElementById("mez1").style.backgroundColor = "rgb(255, 166, 0)";
}


function minus2() {
    document.getElementById("xx").style.left = leftX + "vw";
    document.getElementById("xx").style.top = leftX / 10 + "vw";
    document.getElementById("xx").style.fontSize = fontX + "vw";
    leftX -= 0.5;
    fontX += 0.15;
    if (leftX < 0) {
        leftX = 0;
        fontX = 3;
    } else setTimeout(minus2, 10);
}

function minus() {
    if (xx === 5) {
        tulnagy();
    } else {
        document.getElementById("xx").style.left = leftX + "vw";
        document.getElementById("xx").style.top = leftX / 10 + "vw";
        document.getElementById("xx").style.fontSize = fontX + "vw";
        leftX -= 0.5;
        fontX -= 0.15;
        if (leftX === -4) {
            leftX = 4;
            document.getElementById("xx").style.left = "4vw";
            xx--;
            document.getElementById("xx").innerHTML = xx + "x" + xx;
            minus2();
        } else setTimeout(minus, 10);
    }
}

function plus2() {
    document.getElementById("xx").style.left = leftX + "vw";
    document.getElementById("xx").style.top = leftX / 10 + "vw";
    document.getElementById("xx").style.fontSize = fontX + "vw";
    leftX += 0.5;
    fontX += 0.15;
    if (leftX > 0) {
        leftX = 0;
        fontX = 3;
    } else setTimeout(plus2, 10);
}

function plus() {
    if (xx === 15) {
        tulnagy();
    } else {
        document.getElementById("xx").style.left = leftX + "vw";
        document.getElementById("xx").style.top = leftX / 10 + "vw";
        document.getElementById("xx").style.fontSize = fontX + "vw";
        leftX += 0.5;
        fontX -= 0.15;
        if (leftX === 4) {
            leftX = -4;
            document.getElementById("xx").style.left = "-4vw";
            xx++;
            document.getElementById("xx").innerHTML = xx + "x" + xx;
            plus2();
        } else setTimeout(plus, 10);
    }
}

var szel2 = 28;

function szelesegset() {
    if (szel !== 5) {
        document.getElementById("box2").style.visibility = "visible";
        document.getElementById("str").style.display = "none";
        szel -= 0.5;
        szel2 += 0.5;
        document.getElementById("box").style.left = szel + "vw";
        document.getElementById("box2").style.left = szel2 + "vw";
        if (szel === 5) {
            document.getElementById("box2").style.zIndex = 1;
        } else setTimeout(szelesegset, 10);
    }
}

var melyik = 0;

function up(event) {
    if (melyik === 1) {
        fel = event.key;
        document.getElementById("fel").style.backgroundColor = "gold";
        document.getElementById("fel").innerHTML = fel;
        melyik = 0;
    }
    if (melyik === 2) {
        bal = event.key;
        document.getElementById("bal").style.backgroundColor = "gold";
        document.getElementById("bal").innerHTML = bal;
        melyik = 0;
    }
    if (melyik === 3) {
        jobb = event.key;
        document.getElementById("jobb").style.backgroundColor = "gold";
        document.getElementById("jobb").innerHTML = jobb;
        melyik = 0;
    }
    if (melyik === 4) {
        le = event.key;
        document.getElementById("le").style.backgroundColor = "gold";
        document.getElementById("le").innerHTML = le;
        melyik = 0;
    }
    if (fel !== "" && bal !== "" && jobb !== "" && le !== "") {
        document.getElementById("str").style.display = "inherit";
    }
}

function fel1() {
    melyik = 1;
    document.getElementById("fel").style.backgroundColor = "red";
}

function bal1() {
    melyik = 2;
    document.getElementById("bal").style.backgroundColor = "red";
}

function jobb1() {
    melyik = 3;
    document.getElementById("jobb").style.backgroundColor = "red";
}

function le1() {
    melyik = 4;
    document.getElementById("le").style.backgroundColor = "red";
}


var nehez;

function start() {
    document.getElementById("box").style.display = "none";
    document.getElementById("box2").style.display = "none";
    nehez = xx;
    for (i = 0; i < nehez; i++) {
        document.getElementById("table").innerHTML += "<tr>";
        for (k = 0; k < nehez; k++) {
            document.getElementById("table").innerHTML += "<span onclick='place(" + i + "," + k + ")' style='max-width: " + 35 / nehez + "vw; font-size: " + 35 / nehez + "vw;' class='cell' id='cell" + i + "" + k + "'>__</span>";
        }
        document.getElementById("table").innerHTML += "</tr>";
    }

}

var xset = 999;
var yset = 999;

function place(x, y) {
    if (xset === 999) {
        xset = x * 1;
        yset = y * 1;
        document.getElementById("cell" + x + "" + y).style.backgroundColor = playericon;
    }
    rounds();
}

function rounds() {
    if (xset !== 999) {
        feherit()
        document.getElementById("cell" + xset + "" + yset).style.backgroundColor = playericon;
        evJobb();
        evBal();
        evLe();
        evFel();
        Fbal = 0;
        Fjobb = 0;
        Bfel = 0;
        Ble = 0;
        Jfel = 0;
        Jle = 0;
        Lbal = 0;
        Ljobb = 0;
    }
}

function evJobb() {
    if (yset + 2 < nehez) {
        if (xset - 1 >= 0) {
            if (document.getElementById("cell" + (xset - 1) + "" + (yset + 2)).style.backgroundColor !== "black") {
                document.getElementById("cell" + (xset - 1) + "" + (yset + 2)).style.backgroundColor = "red";
            }
        }
        if (xset + 1 < nehez) {
            if (document.getElementById("cell" + (xset + 1) + "" + (yset + 2)).style.backgroundColor !== "black") {
                document.getElementById("cell" + (xset + 1) + "" + (yset + 2)).style.backgroundColor = "red";
            }
        }
    }
}

function evBal() {
    if (yset - 2 >= 0) {
        if (xset - 1 >= 0) {
            if (document.getElementById("cell" + (xset - 1) + "" + (yset - 2)).style.backgroundColor !== "black") {
                document.getElementById("cell" + (xset - 1) + "" + (yset - 2)).style.backgroundColor = "red";
            }
        }
        if (xset + 1 < nehez) {
            if (document.getElementById("cell" + (xset + 1) + "" + (yset - 2)).style.backgroundColor !== "black") {
                document.getElementById("cell" + (xset + 1) + "" + (yset - 2)).style.backgroundColor = "red";
            }
        }
    }
}

function evFel() {
    if (xset - 2 >= 0) {
        if (yset - 1 >= 0) {
            if (document.getElementById("cell" + (xset - 2) + "" + (yset - 1)).style.backgroundColor !== "black") {
                document.getElementById("cell" + (xset - 2) + "" + (yset - 1)).style.backgroundColor = "red";
            }
        }
        if (yset + 1 < nehez) {
            if (document.getElementById("cell" + (xset - 2) + "" + (yset + 1)).style.backgroundColor !== "black") {
                document.getElementById("cell" + (xset - 2) + "" + (yset + 1)).style.backgroundColor = "red";
            }
        }
    }
}

function evLe() {
    document.getElementById("cell" + xset + "" + yset).style.backgroundColor = playericon;
    if (xset + 2 < nehez) {
        if (yset - 1 >= 0) {
            if (document.getElementById("cell" + (xset + 2) + "" + (yset - 1)).style.backgroundColor !== "black") {
                document.getElementById("cell" + (xset + 2) + "" + (yset - 1)).style.backgroundColor = "red";
            }
        }
        if (yset + 1 < nehez) {
            if (document.getElementById("cell" + (xset + 2) + "" + (yset + 1)).style.backgroundColor !== "black") {
                document.getElementById("cell" + (xset + 2) + "" + (yset + 1)).style.backgroundColor = "red";
            }
        }
    }
}

function feherit() {
    for (i = 0; i < nehez; i++) {
        for (k = 0; k < nehez; k++) {
            if (document.getElementById("cell" + i + "" + k).style.backgroundColor !== "black") {
                document.getElementById("cell" + i + "" + k).style.backgroundColor = "white";
            }
        }
    }
}

var Fbal = 0;
var Fjobb = 0;
var Bfel = 0;
var Ble = 0;
var Jfel = 0;
var Jle = 0;
var Lbal = 0;
var Ljobb = 0;

function ev(event) {
    if (xset !== 999) {
        if (event.key === fel) {
            feherit()
            evFel();
            Fbal = 1;
            Fjobb = 1;
            if (Jfel === 1 && xset - 1 >= 0 && yset + 2 < nehez && document.getElementById("cell" + (xset - 1) + "" + (yset + 2)).style.backgroundColor !== "black") {
                document.getElementById("cell" + xset + "" + yset).style.backgroundColor = "black";
                xset -= 1;
                yset += 2;
                rounds();
            }
            if (Bfel === 1 && xset - 1 >= 0 && yset - 2 >= 0 && document.getElementById("cell" + (xset - 1) + "" + (yset - 2)).style.backgroundColor !== "black") {
                document.getElementById("cell" + xset + "" + yset).style.backgroundColor = "black";
                xset -= 1;
                yset -= 2;
                rounds();
            }
        }

        if (event.key === bal) {
            feherit()
            evBal();
            Bfel = 1;
            Ble = 1;
            if (Fbal === 1 && xset - 2 >= 0 && yset - 1 >= 0 && document.getElementById("cell" + (xset - 2) + "" + (yset - 1)).style.backgroundColor !== "black") {
                document.getElementById("cell" + xset + "" + yset).style.backgroundColor = "black";
                xset -= 2;
                yset -= 1;
                rounds();
            }
            if (Lbal === 1 && xset + 2 < nehez && yset - 1 >= 0 && document.getElementById("cell" + (xset + 2) + "" + (yset - 1)).style.backgroundColor !== "black") {
                document.getElementById("cell" + xset + "" + yset).style.backgroundColor = "black";
                xset += 2;
                yset -= 1;
                rounds();
            }
        }

        if (event.key === jobb) {
            feherit()
            evJobb();
            Jle = 1;
            Jfel = 1;
            if (Fjobb === 1 && xset - 2 >= 0 && yset + 1 < nehez && document.getElementById("cell" + (xset - 2) + "" + (yset + 1)).style.backgroundColor !== "black") {
                document.getElementById("cell" + xset + "" + yset).style.backgroundColor = "black";
                xset -= 2;
                yset += 1;
                rounds();
            }
            if (Ljobb === 1 && xset + 2 < nehez && yset + 1 < nehez && document.getElementById("cell" + (xset + 2) + "" + (yset + 1)).style.backgroundColor !== "black") {
                document.getElementById("cell" + xset + "" + yset).style.backgroundColor = "black";
                xset += 2;
                yset += 1;
                rounds();
            }
        }

        if (event.key === le) {
            feherit()
            evLe();
            Lbal = 1;
            Ljobb = 1;
            if (Jle === 1 && xset + 1 < nehez && yset + 2 < nehez && document.getElementById("cell" + (xset + 1) + "" + (yset + 2)).style.backgroundColor !== "black") {
                document.getElementById("cell" + xset + "" + yset).style.backgroundColor = "black";
                xset += 1;
                yset += 2;
                rounds();
            }
            if (Ble === 1 && xset + 1 < nehez && yset - 2 >= 0 && document.getElementById("cell" + (xset + 1) + "" + (yset - 2)).style.backgroundColor !== "black") {
                document.getElementById("cell" + xset + "" + yset).style.backgroundColor = "black";
                xset -= 1;
                yset -= 2;
                rounds();
            }
        }
    }
}
//győzelem, vereség észlelése xdd