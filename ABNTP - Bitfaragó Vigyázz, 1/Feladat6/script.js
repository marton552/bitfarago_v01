function hatodikf() {
    var be = document.getElementById("num").value * 1;
    document.getElementById('result').innerHTML += "<p>" + be + " kerekítve: " + Math.round(be) + "</p>";
    document.getElementById('result').style.display = "table-cell";
}

function load() {
    document.getElementById("num").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            otodikf();
        }
    });
    background();
}

function background() {
    var styleNumber = Math.floor(Math.random() * 8) + 1;

    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "../stylok/style" + styleNumber + ".css");
    document.getElementsByTagName("head")[0].appendChild(element);
}

function isInt(n) {
    return n % 1 === 0;
}