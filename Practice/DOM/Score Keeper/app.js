/* TO BE REFACTORED SO WE DONT REPEAT!
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const rsBtn = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const wnSelect = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let wnScore = 3;
let isGameOver = false;

p1Btn.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === wnScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === wnScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
    p2Display.innerText = p2Score;
  }
});

wnSelect.addEventListener("change", function () {
  wnScore = parseInt(this.value);
  reset();
});

rsBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Btn.disabled = false;
  p2Btn.disabled = false;
} */

const p1 = {
  score: 0,
  button: document.querySelector("#p1Btn"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Btn"),
  display: document.querySelector("#p2Display"),
};
const rsBtn = document.querySelector("#reset");
const wnSelect = document.querySelector("#playTo");
let wnScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === wnScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});
wnSelect.addEventListener("change", function () {
  wnScore = parseInt(this.value);
  reset();
});
rsBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
