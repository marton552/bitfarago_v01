
var first = 0;

function oszthatosag() {
    var num = document.getElementById("num").value;
    document.getElementById("num").value = "";
    if(num != "" && num != null) {
        
        $("#osztopanel").fadeOut(first);
        setTimeout(function() {

            first = 200;
            document.getElementById("szam").innerHTML = ""+num;
            num = Math.abs(num);
            var osztok = [];
            for(var i = 1; i <= num; i++) {
                if(num % i == 0) osztok.push(i);
            }

            document.getElementById("osztoi").innerHTML = "Ez a szám "+osztok.length+" számmal osztható, osztói:";
            
            var s = "";
            for(var i = 0; i < osztok.length; i++) {
                if(i == osztok.length - 1) s += ""+osztok[i];
                else s += ""+osztok[i]+", ";

                if((i+1) % 10 == 0) s += "<br />";
            }

            document.getElementById("osztok").innerHTML = s;

            $("#osztopanel").fadeIn(first);
        }, first)
        return osztok;
    }
}

function load() {
    document.getElementById("num").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            oszthatosag();
        }
    });
}