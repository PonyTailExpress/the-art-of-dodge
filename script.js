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
  document.getElementById("start-button").style.display = "none"; // Hide Start button
  document.getElementById("game-over-banner").style.display = "none"; // Hide Game Over banner

  // Reset game area before starting
  document.getElementById("game-area").innerHTML = "";

  player = new Player(); // Create player bar

  gameInterval = setInterval(() => {
    new Obstacle(player);
  }, 1000);
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score-display");
  scoreDisplay.textContent = "Points: " + player.points;
}

function endGame() {
  isGameRunning = false;
  clearInterval(gameInterval);
  player.remove();

  // Show Game Over banner
  document.getElementById("game-over-banner").style.display = "block";

  // Delay showing Start button for 2 seconds
  setTimeout(() => {
    document.getElementById("game-over-banner").style.display = "none";
    document.getElementById("start-button").style.display = "block";
  }, 2000);
}
