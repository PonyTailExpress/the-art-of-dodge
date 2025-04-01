class Player {
  constructor() {
    this.element = document.getElementById("player");
    this.positionX = 175; // Centered
    this.speed = 20; // Movement speed
    this.move();
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.speed;
      this.move();
    }
  }

  moveRight() {
    if (this.positionX < 350) {
      this.positionX += this.speed;
      this.move();
    }
  }

  move() {
    this.element.style.left = this.positionX + "px";
  }
}
