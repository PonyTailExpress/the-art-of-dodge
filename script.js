let player;
let gameInterval;

document.getElementById("start-button").addEventListener("click", () => {
  player = new Player();
  startGame();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    player.moveLeft();
  } else if (event.key === "ArrowRight") {
    player.moveRight();
  }
});

function startGame() {
  gameInterval = setInterval(() => {
    new Obstacle(); // Create obstacles at intervals
  }, 1000);
}
