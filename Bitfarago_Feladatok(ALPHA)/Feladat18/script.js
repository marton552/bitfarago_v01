var nehez;

        function gif() {
            var lvl = document.getElementById("lvl").value;
            if (lvl < 5) {
                document.getElementById("gif").src = "https://media1.tenor.com/images/8195d1fb2b5a301361f4f614a277f52c/tenor.gif";
            } else if (lvl < 8) {
                document.getElementById("gif").src = "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif";
            } else if (lvl < 11) {
                document.getElementById("gif").src = "https://media.giphy.com/media/KFt2DA9T82paOA1Yci/giphy.gif";
            } else if (lvl < 13) {
                document.getElementById("gif").src = "https://media.giphy.com/media/3ornjMfYXNDHHfowqA/giphy.gif";
            } else {
                document.getElementById("gif").src = "https://media1.tenor.com/images/79b0f5d59a03bdef45adf6a87997adf0/tenor.gif";
            }
        }

        function start() {
            document.getElementById("gif").style.display = "none";
            document.getElementById("gomb").style.display = "none";
            document.getElementById("box").style.display = "none";
            nehez = document.getElementById("lvl").value
            for (i = 0; i < nehez; i++) {
                document.getElementById("table").innerHTML += "<tr>";
                for (k = 0; k < nehez; k++) {
                    document.getElementById("table").innerHTML += "<span onclick='check(" + i + "," + k + ")' class='cell' id='cell" + i + "" + k + "'>__</span>";
                }
                document.getElementById("table").innerHTML += "</tr>";
            }

            var rnd = Math.floor(Math.random() * 1000) + 2000;
            setTimeout(megjelen, rnd);

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

        var n;
        var sor;
        var oszlop;

        function megjelen() {
            var d = new Date();
            n = d.getTime();
            sor = Math.floor(Math.random() * nehez);
            oszlop = Math.floor(Math.random() * nehez);
            document.getElementById("cell" + sor + "" + oszlop).style.backgroundColor = "red";
        }

        function check(a, b) {
            if (a === sor && b === oszlop) {
                var s = new Date();
                var x = s.getTime();
                alert(x - n + " miliszekundum alatt akttintott");
                location.reload();
            }
        }