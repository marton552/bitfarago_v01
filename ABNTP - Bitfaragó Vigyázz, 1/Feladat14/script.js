var ref;

        function create() {
            var bigNumber = document.getElementById("szam").value + "";
            var tomb = [];
            var ossz = 0;
            var tav = 100 / (bigNumber.length + 1)
            for (i = 0; i < bigNumber.length; i++) {
                tomb[i] = bigNumber.charAt(i) * 1;
                document.getElementById("sorozat").innerHTML += "<span style='left: " + tav * (i + 1) + "vw' id='sor" + i + "'>" + tomb[i] + "</span>";
                ossz += tomb[i] * 1;
            }
            document.getElementById("eredmeny").innerHTML = ossz;
            document.getElementById("invisible").innerHTML = bigNumber.length;
            setTimeout(function() {
                ref = setInterval(move, 10);
            }, 1000);

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

        function move() {
            var max = document.getElementById("invisible").innerHTML * 1;
            var keszvan = 0;
            for (i = 0; i < max; i++) {

                var d = (document.getElementById("sor" + i).style.left).replace("vw", "") * 1;
                var e = ((50 - d) / max) / (50 / max);
                document.getElementById("sor" + i).style.left = d + e + "vw";

                if (d + e < 51 && d + e > 49) {
                    keszvan++;
                }
            }
            if (keszvan === max) {
                clearInterval(ref);
                document.getElementById("img").style.display = "inline";
                for (i = 0; i < max; i++) {
                    document.getElementById("sor" + i).style.display = "none";
                }

                setTimeout(function() {
                    document.getElementById("img").style.display = "none";
                    document.getElementById("szam").value = "";
                    document.getElementById("eredmeny").style.display = "inline";
                    document.getElementById("tap").style.display = "inline";
                }, 1000);
            }
        }

        function reload() {
            if (document.getElementById("eredmeny").style.display === "inline") {
                location.reload();
            }
        }