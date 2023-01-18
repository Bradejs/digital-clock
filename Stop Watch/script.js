var seconds = 00;
var tens = 00;
var OutputSeconds = document.getElementById('second')
var OutpenTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-start');
var buttonReset = document.getElementById('btn-start');
var Interval

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutpenTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <=9){
        OutpenTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutpenTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutpenTens.innerHTML = "0" + tens;
    }

    if(seconds > 9){
        OutputSeconds.innerHTML = seconds
    }
}

