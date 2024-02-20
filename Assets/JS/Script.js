// Selects element by class
var timerEl = document.querySelector(".timer");


var secondsCountDown = 75;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsCountDown--;
        timerEl.textContent = 'Time: ' + secondsCountDown;

        if (secondsCountDown === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            //This calls the function I want to come next 
        }
    }, 1000);
}
// This is here to call the function to work it must come after the function that I link to come after
setTime();
