var headTitle = document.querySelector("#high-score-title");
headTitle.setAttribute("style", "text-align:center");

var titleLarHead = document.createElement("h1");
titleLarHead.textContent = "High Scores";

var titlePar = document.createElement("p");
titlePar.textContent = "Top 5 Leader Board";


headTitle.appendChild(titleLarHead);
headTitle.appendChild(titlePar);


var scoreArray = JSON.parse(localStorage.getItem("scoreList")) || [];

var leaderBoard = document.querySelector("#previous-scores");

function scoreReset() {
    localStorage.removeItem("scoreList");
    window.location.reload();
}

for (var index = 0; index < Math.min(5, scoreList.length); index++) {
    var scoreItem = document.createElement("p");
    scoreItem.setAttribute("class", "previous-scores");
    scoreItem.textContent = scoreList[index].name + ": " + scoreList[index].time;

    leaderBoard.appendChild(scoreItem);
}

var prevScore = document.querySelectorAll(".previous-scores")

prevScore.forEach(function (prevScore) {
    prevScore.setAttribute("style", "align-items: center; border-radius: 10px; display: block; margin: 4px; padding: 4px; text-align: center; width: 40%;");
    prevScore.setAttribute("style","background-color: #9A91FB;  color: #fff;")
});

var container = document.querySelector("#previous-scores");

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

var pressButton = document.querySelector("#home-btn")

pressButton.setAttribute("style", "text-align:center");

var backButton = document.createElement("button");

prevButton.textContent = "Return to Quiz";
prevButton.setAttribute("style", " border: none; border-radius: 20px; cursor: pointer; margin: 20px; padding: 15px;")
prevButton.setAttribute("style","box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.3) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);background-color: #8000ff;")

var refreshButton = document.createElement("button");

refreshButton.textContent = "Reset the Scores";
refreshButton.setAttribute("style", "border: none;  border-radius: 20px; cursor: pointer; margin: 20px; padding: 15px;")
refreshButton.setAttribute("style","box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.3) 0px 1px 1px 0px; color: hsl(0, 0%, 100%);background-color: #8000ff;")

prevButton.addEventListener("mouseover", function () {
    prevButton.style.boxShadow = "0 10px 15px 0 rgba(0,0,0,0.24), 0 15px 45px 0 rgba(0,0,0,0.19)";
})
prevButton.addEventListener("mouseout", function () {
    prevButton.style.boxShadow = "";
});
prevButton.addEventListener("click", function () {
    window.location.href = "index.html";
})

refreshButton.addEventListener("mouseover", function () {
    refreshButton.style.boxShadow = "0 10px 15px 0 rgba(0,0,0,0.24), 0 15px 45px 0 rgba(0,0,0,0.19)";
})
refreshButton.addEventListener("mouseout", function () {
    refreshButton.style.boxShadow = "";
});
refreshButton.addEventListener("click", function () {
    scoreReset();
})


buttons.appendChild(prevButton);
buttons.appendChild(refreshButton);