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
}

function prettyNumber(number) {
    return number < 10 ? "0"+number : number;
}