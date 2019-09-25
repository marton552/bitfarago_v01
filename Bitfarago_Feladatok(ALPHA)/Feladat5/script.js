var array = [];
function otodikf() {
    if(document.getElementById("num").value != "") {

        array.push(document.getElementById("num").value);
        document.getElementById("num").value = "";
        document.getElementById("currnum").innerHTML = ""+(array.length+1);
        
        if(array.length >= 5){
            document.getElementById('result').innerHTML = "<h2>Eredmény</h2>";
            document.getElementById('result').style.display = "table-cell";
            for (var i = 0; i < array.length; i++) {
                document.getElementById('result').innerHTML += "<span>"+array[i]+" * 2 = "+(array[i]*2)+"</span><br>";
            }

            array = [];
            document.getElementById("currnum").innerHTML = ""+(array.length+1);

        }
    }
}

function load() {
    document.getElementById("num").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            otodikf();
        }
    });
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

function isInt(n) {
    return n % 1 === 0;
 }