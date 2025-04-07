let player;
let gameInterval;
let isGameRunning = false;

document.getElementById("start-button").addEventListener("click", () => {
  if (!isGameRunning) {
    startGame();
  }
});

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

  // Reset game area before starting
  document.getElementById("game-area").innerHTML = "";

  player = new Player(); // Create player bar

  gameInterval = setInterval(() => {
    new Obstacle(player); // Create obstacles every second
  }, 1000);
}

function endGame() {
  isGameRunning = false;
  clearInterval(gameInterval);
  player.remove();
  document.getElementById("start-button").style.display = "block"; // Show button again
}
