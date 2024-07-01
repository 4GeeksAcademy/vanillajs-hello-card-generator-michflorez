/* eslint-disable */
import "bootstrap";
import "./style.css";
import { bottom } from "@popperjs/core";

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCard() {
  const signs = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
  const numbers = ["A", "J", "K", "Q", "2", "3", "4", "5", "6", "7", "8", "9"];

  const randomSing = getRandomElement(signs);
  const RandomNumber = getRandomElement(numbers);

  let bottomSign = document.querySelector(".bottom-sign");
  let topSign = document.querySelector(".top-sign");
  let number = document.querySelector(".number");

  bottomSign.innerHTML = randomSing;
  console.log(randomSing);

  topSign.innerHTML = randomSing;
  console.log(randomSing);

  number.innerHTML = RandomNumber;
  console.log(RandomNumber);

  if (randomSing == "&hearts;" || randomSing == "&diams;") {
    bottomSign.style.color = "red";
    topSign.style.color = "red";
    number.style.color = "red";
  } else {
    bottomSign.style.color = "black";
    topSign.style.color = "black";
    number.style.color = "black";
  }
}

window.onload = function() {
  generateCard();
  const refreshButton = document.getElementById("refreshButton");

  refreshButton.addEventListener("click", () => {
    generateCard();
  });

  const timerButton = document.getElementById("timerButton");

  function startAutoRefresh() {
    setInterval(generateCard, 10000);
  }

  const startRefreshButton = document.getElementById("timerButton");
  startRefreshButton.addEventListener("click", startAutoRefresh);
};
