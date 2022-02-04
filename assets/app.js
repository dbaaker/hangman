let itemsToGuess = 
[
    'netflix',
    'hulu',
    'paramount',
    'amc',
    'shudder',
    'acorn tv',
    'sundance now',
    'youtube',
    'amazon prime video',
    'allblk tv'
]

let startGame = false;
let timer = 60000;


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60000,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};


// begin game - click any button to start

// document.addEventListener('keyup', function(el) {

// });

// timer starts
// append guess




// itemsToGuess.forEach( el => Math.floor(Math.random(el), console.log(el)));