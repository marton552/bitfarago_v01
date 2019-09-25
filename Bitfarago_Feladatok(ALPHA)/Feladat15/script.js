function codeeeing() {
            var all_line = document.getElementById("szam").value + "a";;
            var pin = 0;
            for (i = 0; i < all_line.length; i++) {
                if (i + 1 !== all_line.length) {
                    document.getElementById("helye").innerHTML += "<span id='szoveg" + i + "'>" + all_line.charAt(i) + "</span>";
                }
                if ((Number.isInteger(all_line.charAt(i) * 1)) && all_line.charAt(i) !== " ") {
                    pin++;
                }
                if ((Number.isNaN(all_line.charAt(i) * 1)) && pin !== 4) {
                    pin = 0;
                } else if (Number.isNaN(all_line.charAt(i) * 1) && pin === 4) {
                    document.getElementById("szoveg" + (i - 2)).innerHTML = "*";
                    document.getElementById("szoveg" + (i - 3)).innerHTML = "*";
                    document.getElementById("szoveg" + (i - 4)).innerHTML = "*";
                    document.getElementById("szoveg" + (i - 5)).innerHTML = "*";
                    pin = 0;
                }

            }
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