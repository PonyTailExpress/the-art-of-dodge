class Obstacle {
  constructor(playerInstance) {
    this.player = playerInstance;
    this.element = document.createElement("div");
    this.element.classList.add("obstacle");
    document.getElementById("game-area").appendChild(this.element);

    this.positionX = Math.random() * 750;
    this.positionY = 0;
    this.speed = 2;

    this.element.style.width = "50px";
    this.element.style.height = "50px";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.positionY}px`;
    this.element.style.left = `${this.positionX}px`;
    this.element.style.backgroundColor = "red";

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
      this.element.remove();
      this.player.decreaseEnergy();
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
