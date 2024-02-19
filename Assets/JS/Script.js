var questionsList = [
    {
        question:'What city was struck by the 9-11 terriost attacks?',
        answer:{
            a:'Paris',
            b:'New York',
            c:'Bejeing',
            d:'Durban'
        },
        correctAnswer: 'b'
},
    {
        question:'What was the tallest recorded building structure that was later abandoned and unfinshed in the bible?',
        answer:{
            a:'Rome Collesium',
            b:'Burg Khalifa',
            c:'Empire State Building',
            d:'The Tower of Babel'
        },
        correctAnswer: 'd'
},
    {
        question:'What three things motivate the land migratition of people?',
        answer:{
            a:'money, power, and respect',
            b:'democracy, capitalism, and dollars',
            c:'economics, resources, and better living',
            d:'war, famine, and religious freedom'
        },
        correctAnswer: 'c'
},
    {
        question:'Is there a difference between a sun and a star, and why?',
        answer:{
            a:'Yes, a star is just a bright light in the sky',
            b:'No, both are essential the same thing',
            c:"Maybe, depending on the type of star it could be considerd a sun especially if it has planets in it's orbit",
            d:'Neither, both have nothing to do with eac other'
        },
        correctAnswer: 'b'
}
];

// This variable is for the nav in the header that says "View Highscore" 
// var viewHighscore = document.getElementById('score');
// // This variable is for the timer in the header
// var clock = document.getElementById('timer');
// var seconds = 75;
// var questionContainer = document.getElementById('questionDiv');

//This is for the scoreboard

// This is for the timer
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
}
