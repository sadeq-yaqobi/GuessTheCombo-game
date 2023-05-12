const gameMessage = document.querySelector(".game-footer-text");
const gameBtn = document.querySelector(".game-btn");
const numberBox = document.querySelector(".numb-box");
const resetBtn = document.querySelector(".reset-btn");
let gamePlay = false;
let score = 0;
gameBtn.addEventListener("click", gameBtnFunc);
resetBtn.addEventListener("click", function () {
  location.reload();
});

function gameBtnFunc() {
  if (!gamePlay) {
    gamePlay = true;
    numberBox.innerHTML = "";
    gameMessage.innerHTML = "";
    gameBtn.innerHTML = "check";
    score = 0;
    maker(6);
  } else {
    const numbers = document.querySelectorAll(".numb");
    score++;
    gameMessage.innerHTML = "you'r Guesses : " + score;
    resetBtn.className = "reset-btn";
    let winCondition = 0;
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "#59cd90";
        numbers[i].style.color = "#ffffff";
        winCondition++;
      } else {
        let color =
          numbers[i].value < numbers[i].correct ? "#70d6ff" : "#b80c09";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "#ffffff";
      }
      if (winCondition == numbers.length) {
        gameEnd();
      }
    }
  }
}
function resetGame() {}
function gameEnd() {
  if (score <= 6) {
    gameMessage.innerHTML =
      "you solved the combo with " +
      "<span class='score-win '>" +
      score +
      "</span>" +
      " guesses <i class='far fa-hand-peace'></i>";
  } else {
    gameMessage.innerHTML =
      "you solved the combo with " +
      "<span class='score-lose '>" +
      score +
      "</span>" +
      " guesses <i class='far fa-frown'></i>";
  }
  gameBtn.innerHTML = "Reset";
  gamePlay = false;
}

function maker(num) {
  for (let x = 0; x < num; x++) {
    var el = document.createElement("input");
    el.setAttribute("type", "number");
    el.style.width = "60px";
    el.max = 9;
    el.min = 0;
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    el.size = 1;
    el.order = x;
    el.className = "numb form-control form-control-lg d-inline mx-1";
    numberBox.appendChild(el);
  }
  // description
  let description;
  description = document.createElement("small");
  description.innerHTML =
    "<b>Blue: </b>choose higher number, <b>red: </b>choose lower number";
  description.className = "form-text text-muted d-block text-capitalize";
  numberBox.appendChild(description);
  // end description
}
