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
const checkArr = [];
let resultArr;
let clickCounter = 0;

// function
// function cleanUpArr() {
//   if (checkArr.length >= 2) {
//     checkArr.splice(0);
//   }
// }

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
      checkArr.splice(0);

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
  checkArr.splice(0);
  clickCounter = 0;

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
  checkArr.splice(0);
  clickCounter = 0;

  for (const el of h3) {
    el.classList.toggle("hidden");
  }
}

// click event
startBtn.addEventListener("click", startGame);
reStartBtn.addEventListener("click", reStartGame);
reStartBtn2.addEventListener("click", reStartGame2);

(function changeImg() {
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", () => {
      gameImg[i].classList.toggle("hidden");

      checkArr.push(gameImg[i].alt);

      clickCounter++;
      setTimeout(() => {
        if (
          checkArr.length < 2 ||
          checkArr[clickCounter - 1] !== checkArr[clickCounter - 2]
        ) {
          gameImg[i].classList.toggle("hidden");
          checkArr.splice(0);
          clickCounter = 0;
        }

        if (
          checkArr.length >= 2 &&
          checkArr[clickCounter - 1] === checkArr[clickCounter - 2]
        ) {
          //   checkArr.splice(0);
          //   clickCounter = 0;

          return;
        }
      }, 650);
    });

    // checkArr.splice(0);
  }
})();

//실험용
// let clickCounter = 0;

// let check1 = checkArr[0 + clickCounter];
// let check2 = checkArr[1 + clickCounter];

// clickCounter 는 클릭이 한번 있을때마다 올라가는거지...

// 원본

// square[0].addEventListener("click", () => {
//   gameImg[0].classList.toggle("hidden");

//   checkArr.push(gameImg[0].alt);

//   setTimeout(() => {
//     if (checkArr[0] !== checkArr[1]) {
//       gameImg[0].classList.toggle("hidden");

//       //   checkArr.splice(0);
//     } else {
//       return;
//     }
//   }, 1500);

//   //   if (checkArr.length === 2) {
//   //     checkArr.splice(0);
//   //   }
// });

// square[1].addEventListener("click", () => {
//   gameImg[1].classList.toggle("hidden");

//   checkArr.push(gameImg[1].alt);

//   setTimeout(() => {
//     if (checkArr[0] !== checkArr[1]) {
//       gameImg[1].classList.toggle("hidden");

//       //   checkArr.splice(0);
//     } else {
//       return;
//     }
//   }, 1500);

//   //   if (checkArr.length === 2) {
//   //     checkArr.splice(0);
//   //   }
// });

// square[2].addEventListener("click", () => {
//   gameImg[2].classList.toggle("hidden");

//   checkArr.push(gameImg[2].alt);

//   setTimeout(() => {
//     if (checkArr[0] !== checkArr[1]) {
//       gameImg[2].classList.toggle("hidden");

//       //   checkArr.splice(0);
//     } else {
//       return;
//     }
//   }, 1500);

//   //   if (checkArr.length === 2) {
//   //     checkArr.splice(0);
//   //   }
// });

// square[3].addEventListener("click", () => {
//   gameImg[3].classList.toggle("hidden");

//   checkArr.push(gameImg[3].alt);

//   setTimeout(() => {
//     if (checkArr[0] !== checkArr[1]) {
//       gameImg[3].classList.toggle("hidden");

//       //   checkArr.splice(0);
//     } else {
//       return;
//     }
//   }, 1500);

//   //   if (checkArr.length === 2) {
//   //     checkArr.splice(0);
//   //   }
// });

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
