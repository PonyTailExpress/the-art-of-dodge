class Obstacle {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("obstacle");
    document.getElementById("game-area").appendChild(this.element);

    this.positionX = Math.random() * 750; // Random position within the game area
    this.positionY = 0; // Start at the top
    this.speed = 2; // Falling speed

    this.element.style.width = "50px";
    this.element.style.height = "50px";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.positionY}px`;
    this.element.style.left = `${this.positionX}px`;
    this.element.style.backgroundColor = "red"; // Make it visible

    this.move();
  }

  // Detects collision with the player
  checkCollision() {
    const player = document.getElementById("player"); // Get the player element
    const playerRect = player.getBoundingClientRect(); // Get the player's bounding box
    const obstacleRect = this.element.getBoundingClientRect(); // Get the obstacle's bounding box

    // Check if the player intersects with the obstacle
    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      // If collision detected, remove the obstacle and return true
      this.element.remove();
      return true;
    }
    return false;
  }

  move() {
    this.positionY += this.speed;
    this.element.style.top = `${this.positionY}px`;

    // Check for collision every frame
    if (this.checkCollision()) {
      // Perform actions when collision occurs, like incrementing the score
      console.log("Collision detected!");
    }

    if (this.positionY > 600) {
      // Remove the obstacle if it goes off the screen
      this.element.remove();
    } else {
      // Continue moving the obstacle
      requestAnimationFrame(() => this.move());
    }
  }
}
