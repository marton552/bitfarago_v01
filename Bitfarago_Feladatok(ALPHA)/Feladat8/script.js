var v0;
        var szog;
        var sinus;
        var cosinu;
        var sec = 0;
        var g = 4.9;
        var play;
        var suly = 1;

        function dobas() {
            //Math.sin(60* (Math.PI/180))
            v0 = document.getElementById("v0").value * 1;
            szog = document.getElementById("szog").value * 1;
            sinus = Math.sin(szog * (Math.PI / 180));
            cosinus = Math.cos(szog * (Math.PI / 180));
            play = setInterval(el, 10);
        }

        function background(){
            var styleNumber = Math.floor(Math.random()*8)+1;
        
            var element = document.createElement("link");
            element.setAttribute("rel", "stylesheet");
            element.setAttribute("type", "text/css");
            element.setAttribute("href", "../stylok/style"+styleNumber+".css");
            document.getElementsByTagName("head")[0].appendChild(element);
        }

        function load() {
            background();
        }

        function el() {
            sec += 0.1;
            document.getElementById("ball").style.left = v0 * sec * cosinus + "px";
            document.getElementById("ball").style.bottom = v0 * sec * sinus - ((suly * 5) + g) * (sec * sec) + "px";
            if (document.getElementById("ball").style.bottom.replace("px", "") * 1 < -1) {
                clearInterval(play);
                document.getElementById("again").style.display = "inline";
            }
        }

        function esd(a1) {
            if (a1 === 1) {
                suly = 1;
                document.getElementById("eszk").innerHTML = "Súlytalan labda";
                document.getElementById("ball").src = "http://pngimg.com/uploads/football/football_PNG52796.png";
            } else if (a1 === 2) {
                suly = 10;
                document.getElementById("eszk").innerHTML = "Könnyű súly";
                document.getElementById("ball").src = "http://oer.nios.ac.in/wiki/images/thumb/6/6f/Weight.png/1024px-Weight.png";
            } else if (a1 === 3) {
                suly = 100;
                document.getElementById("eszk").innerHTML = "A csapatkapitány";
                document.getElementById("ball").src = "https://i.imgur.com/c50kAj8.png";
            } else if (a1 === 4) {
                suly = 600;
                document.getElementById("eszk").innerHTML = "Afrikai elefánt";
                document.getElementById("ball").src = "http://pngimg.com/uploads/elephants/elephants_PNG18769.png";
            } else if (a1 === 5) {
                suly = 6000000000000000000000000;
                document.getElementById("eszk").innerHTML = "A Föld";
                document.getElementById("ball").src = "https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987553hrjje.png";
            }
        }