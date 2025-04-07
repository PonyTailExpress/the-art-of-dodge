class Obstacle {
  constructor(playerInstance) {
    this.player = playerInstance; // The actual Player instance
    this.element = document.createElement("img"); // Directly create an image element for the obstacle
    this.element.style.position = "absolute"; // Position the image absolutely in the game area
    this.element.style.objectFit = "contain"; // Ensure the image fits within the specified size

    const obstacleImages = [
      "assets/dollar.png", // Dollar note image
      "assets/biden.png", // Biden head image (example, you can use any image)
      "assets/taco.png", // Taco image (another example)
      "assets/hillary.png", // Hillary head image (example, you can use any image)
    ];

    // Select a random image from the list
    const randomImage =
      obstacleImages[Math.floor(Math.random() * obstacleImages.length)];
    this.element.src = randomImage; // Set the randomly selected image

    // Set the width and height for consistency
    this.element.style.width = "50px";
    this.element.style.height = "50px";

    // Position it randomly within the game area
    this.element.style.left = `${Math.random() * 750}px`; // Random starting X position
    this.element.style.top = "0px"; // Starting Y position (top of the game area)

    document.getElementById("game-area").appendChild(this.element); // Append the image directly to the game area

    this.positionY = 0; // Start at the top
    this.speed = 2; // Falling speed
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

      // If the obstacle is the dollar note, reward the player with a point and change the face to kiss
      if (this.element.src.includes("dollar.png")) {
        this.player.addPoint(); // Award a point if the obstacle is a dollar note
        this.player.showKissFace(); // Change to kiss face when hitting dollar
      } else {
        this.player.showShockFace(); // Show shock face for other collisions (Biden, Taco, etc.)
      }

      this.element.remove(); // Remove the obstacle after collision
      this.player.decreaseEnergy(); // Call method to decrease player energy
      return true;
    }

    return false;
  }

  move() {
    this.positionY += this.speed;
    this.element.style.top = `${this.positionY}px`;

    if (this.checkCollision()) return;

    if (this.positionY > 600) {
      // Remove the obstacle if it goes off the screen
      this.element.remove();
    } else {
      requestAnimationFrame(() => this.move());
    }
  }
}
