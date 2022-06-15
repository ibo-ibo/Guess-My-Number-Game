"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = `${message}`;
};

const gameLogic = function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🤨 Enter a number!");
  } else if (guess === secretNumber) {
    displayMessage("😇 Congratulations! correct number.");
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "🤔 Try something greater maybe..";
      if (document.querySelector("body").style.backgroundColor == "red") {
        document.querySelector("body").style.backgroundColor = "gray";
      } else {
        document.querySelector("body").style.backgroundColor = "red";
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😥 You lost the game...");
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage("🤔 Try something lower maybe..");
      if (document.querySelector("body").style.backgroundColor == "red") {
        document.querySelector("body").style.backgroundColor = "gray";
      } else {
        document.querySelector("body").style.backgroundColor = "red";
      }
      document.querySelector("body").style.backgroundColor = "red";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😥 You lost the game...");
      document.querySelector(".score").textContent = 0;
    }
  }
};

const makeDefault = function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
};

document.querySelector(".again").addEventListener("click", makeDefault);
document.querySelector(".check").addEventListener("click", gameLogic);
