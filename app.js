const startBtn = document.querySelector("#start-btn");
const reStartBtn = document.querySelector("#re-start-btn");
const mainImg = document.querySelector("#main-img");
const square = document.querySelectorAll(".square");
const container = document.querySelector("#container");
const gameImg = document.querySelectorAll(".game-img");
const h3 = document.querySelectorAll("h3");

function startGame() {
  startBtn.classList.toggle("hidden");
  reStartBtn.classList.toggle("hidden");
  mainImg.classList.toggle("hidden");
  container.classList.toggle("hidden");

  for (const img of gameImg) {
    img.classList.toggle("hidden");
  }

  for (const el of square) {
    el.classList.toggle("hidden");
  }

  for (const el of h3) {
    el.classList.toggle("hidden");
  }
}

startBtn.addEventListener("click", startGame);
reStartBtn.addEventListener("click", startGame);
