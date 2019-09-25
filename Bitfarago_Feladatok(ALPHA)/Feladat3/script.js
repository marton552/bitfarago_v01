function updateDate() {
    var date = new Date();
    var ido = date.getFullYear()+". "+prettyNumber(date.getMonth()+1)+". "+prettyNumber(date.getDate())+". " +prettyNumber(date.getHours()) + ":" + prettyNumber(date.getMinutes()) + ":" + prettyNumber(date.getSeconds());
    return ido;
}

function updateDateText() {
    document.getElementById("ido").innerHTML = ""+updateDate()+"";
}

function load() {
    updateDateText();
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
function prettyNumber(number) {
    return number < 10 ? "0"+number : number;
}