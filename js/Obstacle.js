class Obstacle {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("obstacle");
    document.getElementById("game-area").appendChild(this.element);
    this.positionX = Math.random() * 350;
    this.positionY = 0;
    this.speed = 3;
    this.move();
  }

  move() {
    this.positionY += this.speed;
    this.element.style.top = this.positionY + "px";
    this.element.style.left = this.positionX + "px";

    if (this.positionY < 300) {
      requestAnimationFrame(() => this.move());
    } else {
      this.element.remove(); // Remove obstacle if it leaves the screen
    }
  }
}
