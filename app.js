// button
const startBtn = document.querySelector("#start-btn");
const reStartBtn = document.querySelector("#re-start-btn");
const reStartBtn2 = document.querySelector("#re-start-btn2");

// imgs
const mainImg = document.querySelector("#main-img");
const gameImg = document.querySelectorAll(".game-img");
const gameOverImg = document.querySelector("#game-over-img");

// else
const square = document.querySelectorAll(".square");
const container = document.querySelector("#container");
const h3 = document.querySelectorAll("h3");
const mainH1 = document.querySelector("#main-h1");
const endH1 = document.querySelector("#endGame-h1");

// function
function startGame() {
  startBtn.classList.toggle("hidden");
  reStartBtn.classList.toggle("hidden");
  mainImg.classList.toggle("hidden");
  container.classList.toggle("hidden");

  for (const el of square) {
    el.classList.toggle("hidden");
  }

  for (const el of h3) {
    el.classList.toggle("hidden");
  }

  setTimeout(() => {
    if (startBtn.classList.value && mainImg.classList.value) {
      reStartBtn.classList.toggle("hidden");
      reStartBtn2.classList.toggle("hidden");
      mainH1.classList.toggle("hidden");
      endH1.classList.toggle("hidden");
      gameOverImg.classList.toggle("hidden");
      container.style.display = "none";

      for (const el of square) {
        el.classList.toggle("hidden");
      }

      for (const img of gameImg) {
        img.className = "game-img hidden";
      }
    } else {
      return;
    }
  }, 5000);

  return;
}

// 리셋버튼을 두개를 만들어야 할듯..
// 일단 얘는 게임 중간용이라 하자.
function reStartGame() {
  startBtn.classList.toggle("hidden");
  reStartBtn.classList.toggle("hidden");
  mainImg.classList.toggle("hidden");
  container.classList.toggle("hidden");

  for (const el of square) {
    el.classList.toggle("hidden");
  }

  for (const el of h3) {
    el.classList.toggle("hidden");
  }

  for (const img of gameImg) {
    img.className = "game-img hidden";
  }
}

function reStartGame2() {
  startBtn.classList.toggle("hidden");
  reStartBtn2.classList.toggle("hidden");
  mainImg.classList.toggle("hidden");
  mainH1.classList.toggle("hidden");
  endH1.classList.toggle("hidden");
  gameOverImg.classList.toggle("hidden");
  container.style.display = "";

  for (const el of h3) {
    el.classList.toggle("hidden");
  }
}

// click event
startBtn.addEventListener("click", startGame);
reStartBtn.addEventListener("click", reStartGame);
reStartBtn2.addEventListener("click", reStartGame2);

const checkArr = [];
let resultArr;

square[0].addEventListener("click", () => {
  gameImg[0].classList.toggle("hidden");

  checkArr.push(gameImg[0].alt);

  setTimeout(() => {
    if (checkArr[0] !== checkArr[1]) {
      gameImg[0].classList.toggle("hidden");
    } else {
      return;
    }
  }, 1500);
});

square[1].addEventListener("click", () => {
  gameImg[1].classList.toggle("hidden");

  checkArr.push(gameImg[1].alt);
});

square[2].addEventListener("click", () => {
  gameImg[2].classList.toggle("hidden");

  checkArr.push(gameImg[2].alt);
});

square[3].addEventListener("click", () => {
  gameImg[3].classList.toggle("hidden");

  checkArr.push(gameImg[3].alt);
});

// for (let i = 0; i < square.length; i++) {
//   square[i].addEventListener("click", () => {
//     gameImg[i].classList.toggle("hidden");
//     checkArr.push(gameImg[i].alt);
//   });
// }

// if (!checkArr[0] === checkArr[1]) {
//   setTimeout(() => {
//     gameImg[i].classList.toggle("hidden");
//   }, 0);
// }
