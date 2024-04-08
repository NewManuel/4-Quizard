
// This is the array of questions that will be asked
var questionsList = [
    {
        question: 'What city was struck by the 9-11 terriost attacks?',
        answer: [
            'a: Paris',
            'b: New York',
            'c: Bejeing',
            'd: Durban',
        ],
        correctAnswer: 'b: New York',
    },
    {
        question: 'What was the tallest recorded building structure that was later abandoned and unfinshed in the bible?',
        answer: [
            'a: Rome Collesium',
            'b: Burg Khalifa',
            'c: Empire State Building',
            'd: The Tower of Babel'
        ],
        correctAnswer: 'd: The Tower of Babel',
    },
    {
        question: 'What three things motivate the land migratition of people?',
        answer: [
            'a: money, power, and respect',
            'b: democracy, capitalism, and dollars',
            'c: economics, resources, and better living',
            'd: war, famine, and religious freedom'
        ],
        correctAnswer: 'c: economics, resources, and better living',
    },
    {
        question: 'Is there a difference between a sun and a star, and why?',
        answer: [
            'a: Yes, a star is just a bright light in the sky',
            'b: No, both are essential the same thing',
            "c: Maybe, depending on the type of star it could be considerd a sun especially if it has planets in it's orbit",
            'd: Neither, both have nothing to do with each other',
        ],
    
        correctAnswer: 'b: No, both are essential the same thing',
    },
];

// This selects the class "timer" to set the timer on the page
var timerEl = document.querySelector(".timer");
// This selects the id "question" to apply the question on the page
var questionEl = document.getElementById("question");
// This selects the id "answer" to append the buttons that will have the answers
var answerEl = document.getElementById("answer");

// This is the timer that sets the time for the quiz once you push start
var secondsCountDown = 5;
// This selects the the div container with the id "quiz" for the quiz
var quizContainer = document.getElementById("quiz");
// Create the start button
var startBtn = document.createElement('button');

// Variable for saving score
var abrevNameInput = document.getElementById('initials');; // Initials input field
var saveButton = document.getElementById('save-button'); // Save button



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

// TODO: This function will display a start button which will start a timer
function startQuiz () {
        
    // Hide the start button
    startBtn.style.display = 'none';
    // Show the quiz container
    quizContainer.style.display = 'block';
    // This calls for the timer to start
    setTime();    
    
    return;
}

// TODO: This function will set a timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsCountDown--;
        timerEl.textContent = 'Time: ' + secondsCountDown;

        // If the timer is equal to zero then  a score can be saved 
    // Alt - if (secondsCountDown === 0)
        if (timeLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
           // Enable input and save button when timer reaches 0
            showScorePage();
           }
           secondsCountDown;
        
    }, 1000);
    presentQuestion();
}

//TODO: This function will display questions
function presentQuestion() {
    
    quizContainer.innerHTML = '';

    // Randomly select a question from the array
    var randomQuestion = questionsList[Math.floor(Math.random() * questionsList.length)];

    // Display the question
    var questionElement = document.createElement('h2');
    questionElement.textContent = randomQuestion.question;
    quizContainer.appendChild(questionElement);

    // Display the answers as buttons                                   $
    randomQuestion.answer.forEach(function (answer) {
        var answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.addEventListener('click', function () {
            checkAnswer(answer, randomQuestion.correctAnswer);
        });
        console.log("Answers Btn: ", answerButton);
        quizContainer.appendChild(answerButton);
    });
}

// Function to check the answer
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        // If the answer is correct, present a new question
        // we RESET the TIME GIVEN 
        secondsCountDown = 75;
        presentQuestion();
    } 
    else {
        showScorePage();
    }
}
// TODO: This function ends game and concludes the game and tallys a score.
function gameOver() {
    clearInterval(timer);
    quizContainer.classList.add('hide');
    timerEl.classList.add('hide');
    endContainer.style.display = "grid";
    scoreEl.textContent = score;
}

// TODO: This is for the score page
// Function to save the score
// This hides the quiz and the timer 
// It then shows the score su
// 
function showScorePage() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementsByClassName('topPage').style.display = 'none';
}

function scoreSubmit() {
    const abrevName = document.getElementById('abrevName').value;
    abrevName.value.trim()
    if (abrevName !== "") {
        alert(`Score saved for ${abrevName} with ${score} points.`);
    } else {
        alert("Please enter your Initials to save your score.");
        return;
    }
    let lastScore = JSON.parse(localStorage.getItem('score')) || [];
    const newScore = { initials, score };
    lastScore.push(newScore);
    localStorage.setItem('score', JSON.stringify(lastScore));
    window.location.href = "scorepage.html";
}

document.getElementById('save-score').addEventListener('click', scoreSubmit);