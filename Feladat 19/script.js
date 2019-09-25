var globalTime = 0;
var start = false;
var timer;

function updateText(time) {
    var sec = "0";
    if(time >= 1000) sec = ""+Math.trunc(time/1000);

    var milli = time%1000;
    if(time%1000 < 10) milli = "00"+(time%1000);
    if(time%1000 < 100) milli = "0"+(time%1000);
    if(time%1000 == 0) milli = "000";

    document.getElementById("time").innerHTML = sec+'<span id="milli">'+milli+'</span>';
}

function setTime() {
    var num = document.getElementById("num").value;
    if(num != "" && num != null && Math.trunc(num) == num) {
        globalTime = num*1000;
        updateText(globalTime);
    }
    //Math.trunc
}

function startTimer() {
    if(start == false) {

        start = true;
        timer = setInterval(function() {
            tickTimer();
        }, 4);
    }
}

function stopTimer() {
    start = false;
    clearInterval(timer);
}

function tickTimer() {
    globalTime -= 4;
    updateText(globalTime);
    if(globalTime <= 0) {
        stopTimer();
        alert("Lejárt az idő!");
        globalTime = 0;
    }
}