var down = false;
        var set;
        var x;
        var y;
        var minusz;
        var sebesseg;
        var left = 50;
        var top1 = 50;
        var mozG = 0.1
        var porog = 0;
        var tomb = ["kocka1.png", "kocka2.png", "kocka3.png", "kocka4.png", "kocka5.png", "kocka6.png"]
        var rnd = 0;

        function tr() {
            down = true;
        }

        function hajit() {
            if (down) {
                x = event.clientX;
                y = event.clientY;
                sebesseg = Math.abs((x - window.innerWidth / 2) + (y - window.innerHeight / 2) / 10);

                set = setInterval(dobas, 1);
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
        
        function dobas() {
            porog += 10;
            rnd = Math.floor(Math.random() * 6);
            document.getElementById("kocka").style.transform = "rotate(" + porog + "deg)";
            document.getElementById("kocka").src = tomb[rnd];
            sebesseg--;
            if (sebesseg < 0) {
                clearInterval(set);
            }
        }
    