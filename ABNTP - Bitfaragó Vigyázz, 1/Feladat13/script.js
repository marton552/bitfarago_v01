function add(){
            var val = document.getElementById("szamok").value * 1;
            var num = document.getElementById("count").innerHTML * 1;
            var abc = 0;
            document.getElementById("plus").innerHTML += "<div id='ker" + num + "' onclick='del(" + num + ")' class='keret'> <span id='lol" + num + "' >" + val + "</span><span class='xx'>X</span></div>";
            for (i = 0; i <= num; i++) {
                if (document.getElementById("ker" + i).style.display !== "none") {
                    abc += document.getElementById("lol" + i).innerHTML * 1;
                }

            }
            document.getElementById("howmany").innerHTML = abc;
            document.getElementById("toltelek").style.width = abc / 10 + "vw";

            document.getElementById("count").innerHTML = num + 1;
            document.getElementById("szamok").value = "";

            if (abc > 1000) {
                var r = confirm("Elérte az 1000-et! Ha az Ok-ra kattint akkor a googleba rákeres arra a számra ami az összeg lett. Ha nem szeretné nyomjon a Mégse-re.");
                if (r == true) {
                    var query = abc;
                    var url = 'http://www.google.com/search?q=' + query;
                    window.open(url, '_blank');
                }
                location.reload();
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

        function del(szam) {
            document.getElementById("ker" + szam).style.display = "none";
            var abc = document.getElementById("howmany").innerHTML * 1;
            abc -= document.getElementById("lol" + szam).innerHTML * 1;
            document.getElementById("howmany").innerHTML = abc;

            document.getElementById("toltelek").style.width = abc / 10 + "vw";
        }