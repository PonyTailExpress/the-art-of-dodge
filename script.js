let player;
let gameInterval;
let isGameRunning = false;

document.getElementById("start-button").addEventListener("click", () => {
  if (!isGameRunning) {
    startGame();
  }
});

document.addEventListener(
  "click",
  () => {
    player.richSound.play().then(() => {
      player.richSound.pause();
      player.richSound.currentTime = 0;
    });

    player.magaSound.play().then(() => {
      player.magaSound.pause();
      player.magaSound.currentTime = 0;
    });

    player.bidenSound.play().then(() => {
      player.bidenSound.pause();
      player.bidenSound.currentTime = 0;
    });

    player.hillarySound.play().then(() => {
      player.hillarySound.pause();
      player.hillarySound.currentTime = 0;
    });

    player.tacoSound.play().then(() => {
      player.tacoSound.pause();
      player.tacoSound.currentTime = 0;
    });

    player.fakeNewsSound.play().then(() => {
      player.fakeNewsSound.pause();
      player.fakeNewsSound.currentTime = 0;
    });
  },
  { once: true }
);

document.addEventListener("keydown", (event) => {
  if (player) {
    if (event.key === "ArrowLeft") {
      player.moveLeft();
    } else if (event.key === "ArrowRight") {
      player.moveRight();
    }
  }
});

function startGame() {
  isGameRunning = true;
  document.getElementById("start-button").style.display = "none";
  document.getElementById("game-over-banner").style.display = "none";

  document.getElementById("game-area").innerHTML = "";

  player = new Player();

  gameInterval = setInterval(() => {
    new Obstacle(player);
  }, 1000);

  player.obstacleInterval = gameInterval;
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score-display");
  scoreDisplay.textContent = "Dollar Score: " + player.points;
}

function endGame() {
  isGameRunning = false;
  clearInterval(gameInterval);
  player.remove();

  // Clear remaining obstacles
  document.getElementById("game-area").innerHTML = "";

  document.getElementById("game-over-banner").style.display = "block";

  setTimeout(() => {
    document.getElementById("game-over-banner").style.display = "none";
    document.getElementById("start-button").style.display = "block";
  }, 5000);
}
