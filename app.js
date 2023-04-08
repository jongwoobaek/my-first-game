// button
const startBtn = document.querySelector("#start-btn");
const reStartBtn = document.querySelector("#re-start-btn");
const reStartBtn2 = document.querySelector("#re-start-btn2");

// imgs
const mainImg = document.querySelector("#main-img");
const gameImg = document.querySelectorAll(".game-img");
const gameOverImg = document.querySelector("#game-over-img");

// else
const goal = document.querySelector("#num-of-fruits");
const square = document.querySelectorAll(".square");
const container = document.querySelector("#container");
const h3 = document.querySelectorAll("h3");
const mainH1 = document.querySelector("#main-h1");
const endH1 = document.querySelector("#endGame-h1");
const checkArr = [];
const resultArr = [];
let timerId;
let timerId2;
let clickCounter = 0;
const checkId = [];

// function
function changeNumOfFruits() {
  let numOfFruits = Math.floor(2 - resultArr.length / 2);

  goal.innerText = `남은 과일 수: ${numOfFruits}개`;
}

function startGame() {
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

  resultArr.splice(0);

  changeNumOfFruits();

  setInterval(changeNumOfFruits, 0);

  timerId = setTimeout(() => {
    if (startBtn.classList.value && mainImg.classList.value) {
      reStartBtn.classList.toggle("hidden");
      reStartBtn2.classList.toggle("hidden");
      mainH1.classList.toggle("hidden");
      endH1.classList.toggle("hidden");
      gameOverImg.classList.toggle("hidden");
      container.style.display = "none";
      checkArr.splice(0);
      clickCounter = 0;

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
}

// 리셋버튼을 두개를 만들어야 할듯..
// 일단 얘는 게임 중간용이라 하자.
function reStartGame() {
  clearTimeout(timerId);

  startBtn.classList.toggle("hidden");
  reStartBtn.classList.toggle("hidden");
  mainImg.classList.toggle("hidden");
  container.classList.toggle("hidden");
  checkArr.splice(0);
  clickCounter = 0;
  checkId.splice(0);

  for (const el of square) {
    el.classList.toggle("hidden");
  }

  for (const el of h3) {
    el.classList.toggle("hidden");
  }

  for (const img of gameImg) {
    img.className = "game-img hidden";
    img.id = "";
  }

  resultArr.splice(0);
}

function reStartGame2() {
  clearTimeout(timerId);

  startBtn.classList.toggle("hidden");
  reStartBtn2.classList.toggle("hidden");
  mainImg.classList.toggle("hidden");
  mainH1.classList.toggle("hidden");
  endH1.classList.toggle("hidden");
  gameOverImg.classList.toggle("hidden");
  container.style.display = "";
  checkArr.splice(0);
  clickCounter = 0;
  checkId.splice(0);

  for (const el of h3) {
    el.classList.toggle("hidden");
  }

  for (const img of gameImg) {
    img.id = "";
  }

  resultArr.splice(0);
}

// click event

startBtn.addEventListener("click", startGame);
reStartBtn.addEventListener("click", reStartGame);
reStartBtn2.addEventListener("click", reStartGame2);

// for (let i = 0; i < square.length; i++) {
//   square[i].addEventListener("click", () => {
//     if (
//       checkId[clickCounter - 1] !== Number(gameImg[i].id) &&
//       gameImg[i].classList[1]
//     ) {
//       let imgId = Math.random();

//       checkId.push(imgId);
//       gameImg[i].id = imgId;

//       gameImg[i].classList.toggle("hidden");

//       checkArr.push(gameImg[i].alt);

//       clickCounter++;
//       setTimeout(() => {
//         if (
//           checkArr.length < 2 ||
//           checkArr[clickCounter - 1] !== checkArr[clickCounter - 2]
//         ) {
//           gameImg[i].classList.toggle("hidden");
//           checkArr.splice(0);
//           clickCounter = 0;

//           checkId.splice(0);
//           gameImg[i].id = "";
//         }

//         if (
//           checkArr.length >= 2 &&
//           checkArr[clickCounter - 1] === checkArr[clickCounter - 2]
//         ) {
//           resultArr.push(checkArr[clickCounter - 1]);
//           //   clickCounter = 0;
//           //   checkArr.splice(0);
//           // resultArr.push(checkArr[clickCounter - 2]);

//           return;
//         }
//       }, 650);
//     } else {
//       return;
//     }
//   });
// }

//실험용
for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", () => {
    if (
      checkId[clickCounter - 1] !== Number(gameImg[i].id) &&
      gameImg[i].classList[1] &&
      checkId.length < 2
    ) {
      let imgId = Math.random();

      checkId.push(imgId);
      gameImg[i].id = imgId;

      gameImg[i].classList.toggle("hidden");

      checkArr.push(gameImg[i].alt);

      clickCounter++;

      if (checkArr[0] !== checkArr[1] && checkArr.length >= 2) {
        clearTimeout(timerId2);

        setTimeout(() => {
          for (const img of gameImg) {
            img.className = "game-img hidden";
            img.id = "";
          }

          checkArr.splice(0);
          clickCounter = 0;

          checkId.splice(0);
          gameImg[i].id = "";
        }, 180);
      } else {
        timerId2 = setTimeout(() => {
          if (
            checkArr.length < 2 ||
            checkArr[clickCounter - 1] !== checkArr[clickCounter - 2]
          ) {
            //   clearTimeout(timerId2);

            gameImg[i].classList.toggle("hidden");
            checkArr.splice(0);
            clickCounter = 0;

            checkId.splice(0);
            gameImg[i].id = "";
          }

          if (
            checkArr.length >= 2 &&
            checkArr[clickCounter - 1] === checkArr[clickCounter - 2]
          ) {
            resultArr.push(checkArr[clickCounter - 1]);

            checkId.splice(0);

            if (resultArr.length === 4) {
              clearTimeout(timerId);
              alert("🎉");
              location.reload();
            }

            return;
          }
        }, 600);
      }

      //   if (checkArr[0] !== checkArr[1] && checkArr.length >= 2) {
      //     // clearTimeout(timerId2);
      //     for (const img of gameImg) {
      //       img.className = "game-img hidden";
      //       img.id = "";
      //     }
      //   }
    } else {
      return;
    }
  });
}

// function changeImg() {
//   for (let i = 0; i < square.length; i++) {
//     square[i].addEventListener("click", () => {
//       gameImg[i].classList.toggle("hidden");

//       checkArr.push(gameImg[i].alt);

//       clickCounter++;
//       setTimeout(() => {
//         if (
//           checkArr.length < 2 ||
//           checkArr[clickCounter - 1] !== checkArr[clickCounter - 2]
//         ) {
//           gameImg[i].classList.toggle("hidden");
//           checkArr.splice(0);
//           clickCounter = 0;
//         }

//         if (
//           checkArr.length >= 2 &&
//           checkArr[clickCounter - 1] === checkArr[clickCounter - 2]
//         ) {
//           resultArr.push(checkArr[clickCounter - 1]);
//           // resultArr.push(checkArr[clickCounter - 2]);

//           return;
//         }
//       }, 650);
//     });
//   }
// }

// changeImgHandler();

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
