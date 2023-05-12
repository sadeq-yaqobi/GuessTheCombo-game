// Game elements
const gameMessage = document.querySelector(".game-footer-text");
const gameBtn = document.querySelector(".game-btn");
const numberBox = document.querySelector(".numb-box");
const resetBtn = document.querySelector(".reset-btn");

// Game variables
let gamePlay = false;
let score = 0;

// Event listeners
gameBtn.addEventListener("click", gameBtnFunc);
resetBtn.addEventListener("click", function () {
  location.reload();
});

// Function to handle game button click
function gameBtnFunc() {
  if (!gamePlay) {
    // Start a new game
    gamePlay = true;
    numberBox.innerHTML = "";
    gameMessage.innerHTML = "";
    gameBtn.innerHTML = "Check";
    score = 0;
    maker(6); // Create number inputs
  } else {
    // Check the guesses
    const numbers = document.querySelectorAll(".numb");
    score++;
    gameMessage.innerHTML = "Your Guesses: " + score;
    resetBtn.className = "reset-btn";
    let winCondition = 0;
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        // Guessed correctly
        numbers[i].style.backgroundColor = "#59cd90"; // Green
        numbers[i].style.color = "#ffffff";
        winCondition++;
      } else {
        // Guessed incorrectly
        let color = numbers[i].value < numbers[i].correct ? "#70d6ff" : "#b80c09"; // Blue or red
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "#ffffff";
      }
      if (winCondition == numbers.length) {
        gameEnd(); // All numbers guessed correctly, end the game
      }
    }
  }
}

// Function to reset the game
function resetGame() {
  // TODO: Implement resetGame logic
}

// Function to end the game
function gameEnd() {
  if (score <= 6) {
    gameMessage.innerHTML =
      "You solved the combo with <span class='score-win'>" +
      score +
      "</span> guesses <i class='far fa-hand-peace'></i>";
  } else {
    gameMessage.innerHTML =
      "You solved the combo with <span class='score-lose'>" +
      score +
      "</span> guesses <i class='far fa-frown'></i>";
  }
  gameBtn.innerHTML = "Reset";
  gamePlay = false;
}

// Function to create number inputs
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

  // Description
  let description;
  description = document.createElement("small");
  description.innerHTML =
    "<b>Blue: </b>choose a higher number, <b>Red: </b>choose a lower number";
  description.className = "form-text text-muted d-block text-capitalize";
  numberBox.appendChild(description);
  // End Description
}
