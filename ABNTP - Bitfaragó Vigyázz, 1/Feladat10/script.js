function show() {
            setTimeout(asd, 100);
        }

        function asd() {
            var tomb = [];
            if (document.getElementById("one").value * 1 > 0) {
                tomb[0] = document.getElementById("one").value * 1;
                document.getElementById("a").innerHTML = tomb[0];
            } else {
                document.getElementById("a").innerHTML = "";
            }
            if (document.getElementById("two").value * 1 > 0) {
                tomb[1] = document.getElementById("two").value * 1;
                document.getElementById("b").innerHTML = tomb[1];
            } else {
                document.getElementById("b").innerHTML = "";
            }
            if (document.getElementById("three").value * 1 > 0) {
                tomb[2] = document.getElementById("three").value * 1;
                document.getElementById("c").innerHTML = tomb[2];
            } else {
                document.getElementById("c").innerHTML = "";
            }
            if (document.getElementById("four").value * 1 > 0) {
                tomb[3] = document.getElementById("four").value * 1;
                document.getElementById("d").innerHTML = tomb[3];
            } else {
                document.getElementById("d").innerHTML = "";
            }
            tomb.sort(function(a, b) {
                return b - a
            });
            var max = tomb[0];
            tomb.sort(function(a, b) {
                return a - b
            });
            var min = tomb[0];

            if (document.getElementById("one").value * 1 > 0) {
                document.getElementById("a").style.visibility = "visible";
                if (document.getElementById("one").value * 1 === max) {
                    document.getElementById("a").style.backgroundColor = "red";
                } else if (document.getElementById("one").value * 1 === min) {
                    document.getElementById("a").style.backgroundColor = "green";
                    document.getElementById("a").innerHTML += "<br/> Legkisebb";
                } else {
                    document.getElementById("a").style.backgroundColor = "aqua";
                }
            }
            if (document.getElementById("two").value * 1 > 0) {
                document.getElementById("b").style.visibility = "visible";
                if (document.getElementById("two").value * 1 === max) {
                    document.getElementById("b").style.backgroundColor = "red";
                } else if (document.getElementById("two").value * 1 === min) {
                    document.getElementById("b").style.backgroundColor = "green";
                    document.getElementById("b").innerHTML += "<br/> Legkisebb";
                } else {
                    document.getElementById("b").style.backgroundColor = "aqua";
                }
            }
            if (document.getElementById("three").value * 1 > 0) {
                document.getElementById("c").style.visibility = "visible";
                if (document.getElementById("three").value * 1 === max) {
                    document.getElementById("c").style.backgroundColor = "red";
                } else if (document.getElementById("three").value * 1 === min) {
                    document.getElementById("c").style.backgroundColor = "green";
                    document.getElementById("c").innerHTML += "<br/> Legkisebb";
                } else {
                    document.getElementById("c").style.backgroundColor = "aqua";
                }
            }
            if (document.getElementById("four").value * 1 > 0) {
                document.getElementById("d").style.visibility = "visible";
                if (document.getElementById("four").value * 1 === max) {
                    document.getElementById("d").style.backgroundColor = "red";
                } else if (document.getElementById("four").value * 1 === min) {
                    document.getElementById("d").style.backgroundColor = "green";
                    document.getElementById("d").innerHTML += "<br/> Legkisebb";
                } else {
                    document.getElementById("d").style.backgroundColor = "aqua";
                }
            }



            document.getElementById("a").style.height = ((document.getElementById("one").value * 1) / max) * 10 + "vw";
            document.getElementById("a").style.top = (30 - ((document.getElementById("one").value * 1) / max) * 10) + "vw";

            document.getElementById("b").style.height = ((document.getElementById("two").value * 1) / max) * 10 + "vw";
            document.getElementById("b").style.top = (30 - ((document.getElementById("two").value * 1) / max) * 10) + "vw";

            document.getElementById("c").style.height = ((document.getElementById("three").value * 1) / max) * 10 + "vw";
            document.getElementById("c").style.top = (30 - ((document.getElementById("three").value * 1) / max) * 10) + "vw";

            document.getElementById("d").style.height = ((document.getElementById("four").value * 1) / max) * 10 + "vw";
            document.getElementById("d").style.top = (30 - ((document.getElementById("four").value * 1) / max) * 10) + "vw";
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