// buttons
const startBtn = document.querySelector("#start-btn");
const reStartBtn = document.querySelector("#re-start-btn");
const reStartBtn2 = document.querySelector("#re-start-btn2");

// imgs
const mainImg = document.querySelector("#main-img");
// const gameImg = document.querySelectorAll(".game-img");
const gameImg = [];
const gameOverImg = document.querySelector("#game-over-img");
const fruitsImgs = [
  "strawberry.jpeg",
  "strawberry.jpeg",
  "cherry.jpeg",
  "cherry.jpeg",
];
let duplicateFruitsImgs;
// const allGameImgs = document.querySelectorAll(".game-img");

// elements
const goal = document.querySelector("#num-of-fruits");
const square = document.querySelectorAll(".square");
const container = document.querySelector("#container");
const h3 = document.querySelectorAll("h3");
const mainH1 = document.querySelector("#main-h1");
const endH1 = document.querySelector("#endGame-h1");
const gameTimer = document.querySelector("#game-timer");
let randomImg;

// else
const checkArr = [];
const resultArr = [];
let timerId;
let timerId2;
let clickCounter = 0;
const checkId = [];
let numOfFruits;
let remainingTime = 5;
let timerChanger;
let img;

// function
function createFruitsImgs() {
  duplicateFruitsImgs = fruitsImgs.slice();
  for (let i = 0; i < 4; i++) {
    img = document.createElement("img");

    randomImg = duplicateFruitsImgs.splice(
      [Math.floor(Math.random() * duplicateFruitsImgs.length)],
      1
    );
    img.src = `imgs/${randomImg}`;
    img.alt = randomImg;
    img.className = "game-img hidden";

    square[i].append(img);
    gameImg.push(img);
  }
}

// for (i = 0; i < fruitsImgs.length; i++) {
//   let img = document.createElement("img");
// }

function changeNumOfFruits() {
  numOfFruits = Math.floor(2 - resultArr.length / 2);

  goal.innerText = `남은 과일 수: ${numOfFruits}개`;
}

function changeTimerText() {
  gameTimer.innerText = `남은 시간: ${remainingTime}초`;
}

function startGame() {
  createFruitsImgs();

  changeTimerText();

  (function changeTimer() {
    timerChanger = setInterval(() => {
      remainingTime--;

      changeTimerText();
    }, 1000);
  })();

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
    if (numOfFruits === 0) {
      clearTimeout(timerId);
      clearInterval(timerChanger);
      alert("🎉");
      location.reload();
    }

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

      clearInterval(timerChanger);

      mainH1.innerText = "과일찾기";
      mainH1.style.color = "black";

      gameImg.splice(0);

      const allGameImgs = document.querySelectorAll(".game-img");

      for (let i = 0; i < allGameImgs.length; i++) {
        square[i].removeChild(allGameImgs[i]);
      }
    } else {
      return;
    }
  }, 5000);
}

// 리셋버튼을 두개를 만들어야 할듯..
// 일단 얘는 게임 중간용이라 하자.
function reStartGame() {
  //   createFruitsImgs();

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

  clearInterval(timerChanger);
  remainingTime = 5;

  mainH1.innerText = "과일찾기";
  mainH1.style.color = "black";

  gameImg.splice(0);

  const allGameImgs = document.querySelectorAll(".game-img");

  for (let i = 0; i < allGameImgs.length; i++) {
    square[i].removeChild(allGameImgs[i]);
  }
}

function reStartGame2() {
  //   createFruitsImgs();

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

  clearInterval(timerChanger);
  remainingTime = 5;

  gameImg.splice(0);

  const allGameImgs = document.querySelectorAll(".game-img");

  for (let i = 0; i < allGameImgs.length; i++) {
    square[i].removeChild(allGameImgs[i]);
  }
}

// click event

startBtn.addEventListener("click", startGame);
reStartBtn.addEventListener("click", reStartGame);
reStartBtn2.addEventListener("click", reStartGame2);

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", () => {
    if ((goal.innerText = 1 && resultArr.length === 1)) {
      mainH1.innerText = "천천히 누르세요!!!!";
      mainH1.style.color = "red";
    }

    if (
      checkId[clickCounter - 1] !== Number(gameImg[i].id) &&
      gameImg[i].classList[1] &&
      checkId.length < 2 &&
      resultArr.length !== 1
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
            gameImg[i].classList.toggle("hidden"); // 이거 수정해야할듯
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
              clearInterval(timerChanger);
              alert("🎉");
              location.reload();
            }

            return;
          }
        }, 600);
      }
    } else {
      return;
    }
  });
}

//실험용

// setInterval(() => {
//   console.log(resultArr);
// }, 200);
// let you = 5;

// console.log(you);

// setInterval(() => {
//   you = you - 1;
//   console.log(you);
// }, 1000);

// for (let i = 0; i < square.length; i++) {
//   square[i].addEventListener("click", () => {
//     if ((goal.innerText = 1 && resultArr.length === 1)) {
//       mainH1.innerText = "천천히 누르세요!!!!";
//       mainH1.style.color = "red";
//     }

//     if (
//       checkId[clickCounter - 1] !== Number(gameImg[i].id) &&
//       gameImg[i].classList[1] &&
//       checkId.length < 2 &&
//       resultArr.length !== 1
//     ) {
//       let imgId = Math.random();

//       checkId.push(imgId);
//       gameImg[i].id = imgId;

//       gameImg[i].classList.toggle("hidden");

//       checkArr.push(gameImg[i].alt);

//       clickCounter++;

//       if (checkArr[0] !== checkArr[1] && checkArr.length >= 2) {
//         clearTimeout(timerId2);

//         setTimeout(() => {
//           for (const img of gameImg) {
//             img.className = "game-img hidden";
//             img.id = "";
//           }

//           checkArr.splice(0);
//           clickCounter = 0;

//           checkId.splice(0);
//           gameImg[i].id = "";
//         }, 180);
//       } else {
//         timerId2 = setTimeout(() => {
//           if (
//             checkArr.length < 2 ||
//             checkArr[clickCounter - 1] !== checkArr[clickCounter - 2]
//           ) {
//             gameImg[i].classList.toggle("hidden"); // 이거 수정해야할듯
//             checkArr.splice(0);
//             clickCounter = 0;
//             checkId.splice(0);
//             gameImg[i].id = "";
//           }

//           if (
//             checkArr.length >= 2 &&
//             checkArr[clickCounter - 1] === checkArr[clickCounter - 2]
//           ) {
//             resultArr.push(checkArr[clickCounter - 1]);

//             checkId.splice(0);

//             if (resultArr.length === 4) {
//               clearTimeout(timerId);
//               clearInterval(timerChanger);
//               alert("🎉");
//               location.reload();
//             }

//             return;
//           }

//           //   if ((goal.innerText = 1 && gameImg[i].alt === resultArr[0])) {
//           //     mainH1.innerText = "천천히 누르세요!!!!";
//           //     mainH1.style.color = "red";
//           //     // alert("You should click slowly!!!!!!!!");
//           //     resultArr.push(gameImg[i].alt);

//           //     gameImg[i].classList.remove("hidden");
//           //   }
//         }, 600);
//       }
//     } else {
//       return;
//     }
//   });
// }

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
