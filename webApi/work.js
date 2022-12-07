let i = 0;

function startTimer(){
    i++;
    postMessage(i);

    setTimeout('startTimer();', 500)
}

startTimer();