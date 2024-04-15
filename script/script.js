var quizBegin = document.querySelector("#homepage");
var headTitle = document.createElement("h1");
var indepthDetail = document.createElement("p");
var btnBegin = document.createElement("button");
var timeClock = document.querySelector(".topPage");
var btnShowScore = document.createElement("button");
var timer = document.querySelector('.timer');
var placeTxt = document.querySelector('#homepage');
// var questionBox = document.querySelector('#quiz');
var timerInterval;
var questionSave = JSON.parse(localStorage.getItem("questionsList"));
var questionIndex = 0;
var questionBox = document.getElementById("quiz");
var time = 75;

// Here the quiz is styled to be in the center
quizBegin.setAttribute("style", "text-align: center");

// The Title is placed with styling
headTitle.textContent = "Quizzard";
headTitle.setAttribute("style", "text-align: center; font-size: 5em; font-weight: bold");

// Here the rules to the quiz are set.
indepthDetail.setAttribute("id", "homepage");
indepthDetail.textContent = "This quiz will cover random questions with a timer set to 75 seconds if each questions is answered correctly the timer is reset if not the timer continues to it runs out ending the quiz.";
indepthDetail.setAttribute("style", "text-align: center; font-size: 15px; font-weight: 450; margin: 10px;");

// A button labeled "Start Quiz" to start the quiz is created.
btnBegin.setAttribute("id", "start")
btnBegin.textContent = "Start Quiz";
btnBegin.setAttribute("style", "border: none; background-color: #5F43F7; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); display: inline-block; font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 15px 35px; text-align: center; cursor: pointer;")
btnBegin.addEventListener("mouseover", function () {
    btnBegin.style.boxShadow = "0 8px 13px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
})
btnBegin.addEventListener("mouseout", function () {
    btnBegin.style.boxShadow = "";
});

// var btnStart = document.querySelector('#start');

// This set the "indepthDetail" as a h1 with a button to to start the quiz. 
quizBegin.appendChild(headTitle);
quizBegin.appendChild(indepthDetail);
quizBegin.appendChild(btnBegin);


timeClock.setAttribute("style", "display: flex; justify-content: space-between");


// Here the timer and score button are created.
btnShowScore.setAttribute("id", "high-score-page");
btnShowScore.setAttribute("style", "margin: 15px; cursor: pointer; border: none; background-color: #9A91FB; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);")
btnShowScore.textContent = "High Scores";
btnShowScore.addEventListener("mouseover", function () {
    btnShowScore.style.boxShadow = "0 10px 15px 0 rgba(0,0,0,0.24), 0 15px 45px 0 rgba(0,0,0,0.19)";
})
btnShowScore.addEventListener("mouseout", function () {
    btnShowScore.style.boxShadow = "";
});
btnShowScore.addEventListener("click", function () {
    window.location.href = "scorepage.html";
});

// Here the the score button will placed.
timeClock.appendChild(btnShowScore);


// The function for the timer and button.
function showAfterTime() {
    if (time <= 0) {
        clearInterval(timerInterval);
        showScorePg();
    }
};


// This is the function that will start the quiz when the user hits the btnStart
btnBegin.addEventListener("click", function () {
    placeTxt.classList.add("hidden");
    questionBox.classList.remove("hidden");
    questionBox.setAttribute("style", "text-align: center; margin: auto; display: flex; flex-direction: column; align-items: center;");
    timer.textContent = time;
    timerInterval = setInterval(function () {
        time--;
        timer.textContent = time;
        showAfterTime();
    }, 1000)
    displayQuestion();
})


// The function below stores the score and name in local storage
function storeScore(nameAbrev, timerSet) {
    var scoreRecorded = JSON.parse(localStorage.getItem("scoreRecorded")) || [];

    var newScore = {
        name: nameAbrev,
        time: timerSet
    };
    scoreRecorded.push(newScore);
    scoreRecorded.sort(function (b, a) {
        return a.time - b.time;
    });
    localStorage.setItem("scoreRecorded", JSON.stringify(scoreRecorded));
};


// Here once the quiz is done this function begins.
function showScorePg() {    
    var quizSpot = document.getElementById("quiz");
    var scoreSpot = document.getElementById("score");

    clearInterval(timerInterval);

   
    var scoreHeading = document.createElement("h2"); 
    // Here a message of prompting the quiz is done is created and placed.
    scoreHeading.textContent = "Finished!";
    scoreHeading.setAttribute("style", "text-align: center");
    scoreSpot.appendChild(scoreHeading);

    var timerSet = time;
    var timeDisplay = document.createElement("p");
    // Here the timer and title alerting time are created and placed in "timeDiisplay".
    timeDisplay.textContent = "Time Left: " + timerSet + " seconds";
    timeDisplay.setAttribute("style", "text-align: center");
    scoreSpot.appendChild(timeDisplay);

    var inputBox = document.createElement("section")
    // Here a section for placing text score is created and styled.
    inputBox.setAttribute("style", "display: flex; justify-content: center; margin-top: 20px;")

    var initialsHere = document.createElement("input");
    // Here the text box is created 
    initialsHere.setAttribute("type", "text");
    initialsHere.setAttribute("placeholder", "Enter Your Initials");


    var btnSubmit = document.createElement("button");
    // A submit button is created for the score submission.
    btnSubmit.textContent = "Submit";
    btnSubmit.setAttribute("style", "margin: 5px; padding: 5px; cursor: pointer; border: none; background-color: #9A91FB; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);")

    // This function with the "if" statement is tricggered when the submission button is clicked, then it saves the score and intials and places it on the page.
    btnSubmit.addEventListener("click", function () {
        var nameAbrev = initialsHere.value.trim();
        // 
        if (nameAbrev !== "") {
            if (nameAbrev.length <= 3) {
                var timerSet = time;
                storeScore(nameAbrev, timerSet);
                window.location.href = "scorepage.html";
            } else {
                alert("Initials should be 3 characters or less.")
            }

        } else {
            alert("Please enter your initials.")
        }
    });
    inputBox.appendChild(initialsHere);
    inputBox.appendChild(btnSubmit);
    scoreSpot.appendChild(inputBox);


    var hideTime = document.querySelector(".time-header")
    // Here the quiz is hidden and shows the scorepage.
    quizSpot.classList.add("hidden");
    quizSpot.setAttribute("style", "display: none");
    scoreSpot.classList.remove("hidden");
    quizSpot.innerHTML = "";
    hideTime.classList.add("hidden");
    hideTime.setAttribute("style", "display: none");
};


// Here the function shows the questions. 
function displayQuestion() {
    questionBox.innerHTML = "";
    
    var presentQuestion = questionSave[questionIndex].question;
    var prompt = document.createElement("h3")
    // The question is created.
    prompt.textContent = presentQuestion;
    prompt.setAttribute("style", "text-align: center");
    prompt.setAttribute("id", "quiz");
    questionBox.appendChild(prompt);


    var resultBox = document.getElementById("statement");


    function btnClickOn() {
        var choiceCorrect = questionSave[questionIndex].correctAnswer;        
        var responseBack = document.createElement("p");
        // This "if" statement
        if (this.textContent === choiceCorrect) {
            responseBack.textContent = "Correct!";
        } else {
            responseBack.textContent = "Incorrect!";
        };
        responseBack.setAttribute("style", "margin-top: 10px; color: gray; font-style: italic; text-align: center;");
        resultBox.appendChild(responseBack);

        setTimeout(function () {
            responseBack.remove();
        }, 2000);

        if (this.textContent !== choiceCorrect) {
            time -= 10;
        }

        if (questionIndex < questionSave.length - 1) {
            questionIndex++;
            displayQuestion();
        } else {
            clearInterval(timerInterval);
            showScorePg();
            console.log("Quiz completed!");
        }
    }

    var multiChoice = questionSave[questionIndex].answer;
    //Here every answer is looped over. 
    for (var i = 0; i < multiChoice.length; i++) {
        var answerButton = document.createElement("button");
        // The multiple choice answer and there buttons are created. 
        answerButton.classList.add("question-button");
        answerButton.textContent = multiChoice[i];
        answerButton.addEventListener("click", btnClickOn);
        questionBox.appendChild(answerButton);
    }
}