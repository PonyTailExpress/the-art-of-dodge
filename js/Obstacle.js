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

  move() {
    this.positionY += this.speed;
    this.element.style.top = `${this.positionY}px`;

    if (this.positionY > 600) {
      // Remove when off-screen
      this.element.remove();
    } else {
      requestAnimationFrame(() => this.move());
    }
  }
}
