
// This is the array of questions that will be asked
var questionsList = [
    {
        question: 'What city was struck by the 9-11 terriost attacks?',
        answer: {
            a: 'Paris',
            b: 'New York',
            c: 'Bejeing',
            d: 'Durban'
        },
        correctAnswer: 'b'
    },
    {
        question: 'What was the tallest recorded building structure that was later abandoned and unfinshed in the bible?',
        answer: {
            a: 'Rome Collesium',
            b: 'Burg Khalifa',
            c: 'Empire State Building',
            d: 'The Tower of Babel'
        },
        correctAnswer: 'd'
    },
    {
        question: 'What three things motivate the land migratition of people?',
        answer: {
            a: 'money, power, and respect',
            b: 'democracy, capitalism, and dollars',
            c: 'economics, resources, and better living',
            d: 'war, famine, and religious freedom'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Is there a difference between a sun and a star, and why?',
        answer: {
            a: 'Yes, a star is just a bright light in the sky',
            b: 'No, both are essential the same thing',
            c: "Maybe, depending on the type of star it could be considerd a sun especially if it has planets in it's orbit",
            d: 'Neither, both have nothing to do with eac other'
        },
        correctAnswer: 'b'
    }
];


// This selects the class "timer" to set the timer on the page
var timerEl = document.querySelector(".timer");
// This selects the id "question" to apply the question on the page
var questionEl = document.getElementById("question");
// This selects the id "answer" to append the buttons that will have the answers
var answerEl = document.getElementById("answer");
// This is the timer that sets the time for the quiz once you push start
var secondsCountDown = 75;
// This selects the the div container with the id "quiz" for the quiz
var quizContainer = document.getElementById("quiz");
// Create the start button
var startBtn = document.createElement('button');


// Name the button "Start Quiz"
startBtn.textContent = 'Start Quiz';
// This listens for when the "Start Quiz" button is clicked
startBtn.addEventListener('click', startQuiz);
// Append the start button to the body
document.body.appendChild(startBtn);
// Create the quiz container class
// quizContainer.classList.add('quiz');
// This initially hides the quiz container
quizContainer.style.display = 'none';
// Append the quiz container to the body
document.body.appendChild(quizContainer);


function startQuiz () {
        
    // Hide the start button
    startBtn.style.display = 'none';
    // Show the quiz container
    quizContainer.style.display = 'block';
    // This calls for the timer to start
    setTime();
    // Display the first question
    
}

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
// setTime();



