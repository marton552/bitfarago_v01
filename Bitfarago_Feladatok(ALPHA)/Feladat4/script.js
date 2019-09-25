function generate() {
    var s = "<table id='board'>";

    for(var i = 0; i < 8; i++) {
        s += "<tr>";
        for(var j = 0; j < 8; j++) {
           s += "<td></td>";
        }
        s += "</tr>";
    }

    s += "</table>";

    document.getElementById("chessboard").innerHTML = s;
    $("#chessboard").slideDown(1000);
}