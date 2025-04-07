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
  document.getElementById("game-over-banner").style.display = "none"; // Hide Game Over banner

  // Reset game area before starting
  document.getElementById("game-area").innerHTML = "";

  player = new Player(); // Create player bar

  gameInterval = setInterval(() => {
    new Obstacle(player); // Create obstacles every second
  }, 1000);
}

// function endGame() {
//   isGameRunning = false;
//   clearInterval(gameInterval);
//   player.remove();
//   //   document.getElementById("start-button").style.display = "block"; // Show button again
//   //   document.getElementById("game-over-banner").style.display = "block";
//   // const gameOverBanner = document.getElementById("game-over-banner");
//   gameOverBanner.style.display = "block"; // Show Game Over banner

//   // Delay showing start button for 2 seconds
//   setTimeout(() => {
//     gameOverBanner.style.display = "none";
//     document.getElementById("start-button").style.display = "block"; // Show button again
//   }, 2000);
// }

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
