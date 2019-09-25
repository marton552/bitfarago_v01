var tf = 0;
        var sor;
        var oszlop;
        var egyedi = 1;

        function start() {
            document.getElementById("table").innerHTML = "";
            document.getElementById("asd").style.display = "inline";
            sor = document.getElementById("sor").value;
            oszlop = document.getElementById("oszlop").value;
            for (i = 1; i <= sor; i++) {
                document.getElementById("table").innerHTML += "<tr>";
                for (k = 1; k <= oszlop; k++) {
                    document.getElementById("table").innerHTML += "<span onmouseup='up()' onmouseover='draw(" + i + "" + k + ")' onmousedown='check(" + i + "" + k + ")' class='cell' id='cell" + i + "" + k + "'>__</span>";
                }
                document.getElementById("table").innerHTML += "</tr>";
            }

        }
        //▉
        function up() {
            tf = 0;
        }

        function check(a) {
            if (document.getElementById("cell" + a).style.backgroundColor === "black") {
                document.getElementById("cell" + a).style.backgroundColor = "white";
                tf = 2;
            } else {
                document.getElementById("cell" + a).style.backgroundColor = "black";
                tf = 1;
            }
        }

        function draw(b) {
            if (tf === 1) {
                document.getElementById("cell" + b).style.backgroundColor = "black";
            } else if (tf === 2) {
                document.getElementById("cell" + b).style.backgroundColor = "white";
            }
        }

        function save() {
            var person = prompt("Mentés ezen a néven:", "");
            if (person == null || person == "") {
                alert("A rajz nem lett elmentve");
            } else {
                save01(person);
            }
        }

        function save01(nev) {
            var elonezet = "";
            var szeleseg = 6 / oszlop;
            var mentes = ""
            for (i = 1; i <= sor; i++) {
                for (k = 1; k <= oszlop; k++) {
                    if (document.getElementById("cell" + i + "" + k).style.backgroundColor === "black") {
                        elonezet += "<div class='black' style=font-size:" + szeleseg + "vw>▉</div>";
                        mentes += "b";
                    } else {
                        elonezet += "<div class='white' style=font-size:" + szeleseg + "vw>▉</div>";
                        mentes += "w";
                    }

                }
                elonezet += "<br>"
            }

            document.getElementById("left").innerHTML += "<div onclick='load(" + egyedi + "," + sor + "," + oszlop + ")' class='keret'> <div class='kep'>" + elonezet + "</div> <div>" + nev + "</div> </div><div style='display: none' id='egyedi" + egyedi + "'>" + mentes + "</div>";
            egyedi++;
        }

        function load(a, b, c) {
            document.getElementById("table").innerHTML = "";
            sor = b
            oszlop = c
            ossz = 0;
            for (i = 1; i <= sor; i++) {
                document.getElementById("table").innerHTML += "<tr>";
                for (k = 1; k <= oszlop; k++) {
                    if (document.getElementById("egyedi" + a).innerHTML.charAt(ossz) === "b") {
                        document.getElementById("table").innerHTML += "<span style='background-color: black' onmouseup='up()' onmouseover='draw(" + i + "" + k + ")' onmousedown='check(" + i + "" + k + ")' class='cell' id='cell" + i + "" + k + "'>__</span>";
                    } else {
                        document.getElementById("table").innerHTML += "<span style='background-color: white' onmouseup='up()' onmouseover='draw(" + i + "" + k + ")' onmousedown='check(" + i + "" + k + ")' class='cell' id='cell" + i + "" + k + "'>__</span>";
                    }
                    ossz++;
                }
                document.getElementById("table").innerHTML += "</tr>";
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