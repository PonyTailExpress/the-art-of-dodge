class Obstacle {
  constructor(playerInstance) {
    this.player = playerInstance; // The actual Player instance
    this.element = document.createElement("img"); // Directly create an image element for the obstacle
    this.element.style.position = "absolute"; // Position the image absolutely in the game area
    this.element.style.objectFit = "contain"; // Ensure the image fits within the specified size

    const obstacleImages = [
      "assets/dollar.png", // Dollar note image
      "assets/biden.png", // Biden head image
      "assets/taco.png", // Taco image
      "assets/hillary.png", // Hillary head image
    ];

    // Select a random image from the list
    const randomImage =
      obstacleImages[Math.floor(Math.random() * obstacleImages.length)];
    this.element.src = randomImage;

    // Set size of the obstacle
    this.element.style.width = "50px";
    this.element.style.height = "50px";

    // Set random horizontal position
    this.element.style.left = `${Math.random() * 750}px`;
    this.element.style.top = "0px";

    // Add to game area
    document.getElementById("game-area").appendChild(this.element);

    this.positionY = 0;
    this.speed = 2;
    this.move();
  }

  checkCollision() {
    const playerElement = this.player?.element;
    if (!playerElement) return false;

    const playerRect = playerElement.getBoundingClientRect();
    const obstacleRect = this.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      console.log("Collision detected!");

      if (this.element.src.includes("dollar.png")) {
        this.player.addPoint();
        this.player.showKissFace();
        this.player.playRichSound();
      } else if (this.element.src.includes("biden.png")) {
        this.player.showShockFace();
        this.player.playBidenSound();
      } else if (this.element.src.includes("hillary.png")) {
        this.player.showShockFace();
        this.player.playHillarySound();
      } else if (this.element.src.includes("taco.png")) {
        this.player.showShockFace();
        this.player.playTacoSound();
      } else {
        this.player.showShockFace();
      }

      this.element.remove(); // Remove the obstacle after collision
      this.player.decreaseEnergy(); // Decrease player energy
      return true;
    }

    return false;
  }

  move() {
    this.positionY += this.speed;
    this.element.style.top = `${this.positionY}px`;

    if (this.checkCollision()) return;

    if (this.positionY > 600) {
      this.element.remove();
    } else {
      requestAnimationFrame(() => this.move());
    }
  }
}
