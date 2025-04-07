class Player {
  constructor() {
    this.element = document.createElement("div");
    this.element.id = "player";
    this.element.classList.add("player");
    document.getElementById("game-area").appendChild(this.element);

    this.positionX = 450; // Start in the center
    this.speed = 20;
    this.width = 100;
    this.energy = 100;
    this.move();
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.speed;
      this.move();
    }
  }

  moveRight() {
    if (this.positionX + this.width < 894) {
      this.positionX += this.speed;
      this.move();
    }
  }

  move() {
    this.element.style.left = this.positionX + "px";
  }

  decreaseEnergy() {
    if (this.energy > 0) {
      this.energy -= 10; // Decrease energy by 10 for each collision
      console.log("Energy decreased: " + this.energy);
      document.getElementById("energy").style.width = this.energy + "%"; // Update energy bar
    }
    if (this.energy <= 0) {
      console.log("Game Over!");
      endGame(); // End the game when energy reaches 0
    }
  }

  remove() {
    this.element.remove();
  }
}
