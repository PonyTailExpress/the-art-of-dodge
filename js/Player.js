class Player {
  constructor() {
    this.element = document.createElement("img");
    this.element.id = "player";
    this.element.classList.add("player");
    this.element.src = "assets/trump.png"; // Default Trump image
    this.element.style.position = "absolute";
    this.element.style.bottom = "0px";
    this.element.style.left = "450px";
    this.element.style.width = "100px";
    this.element.style.height = "100px";
    this.element.style.objectFit = "contain";
    this.element.style.zIndex = "10";

    document.getElementById("game-area").appendChild(this.element);

    // Player properties
    this.positionX = 450;
    this.speed = 20;
    this.width = 100;
    this.energy = 100;
    this.points = 0;

    // Score display setup
    this.scoreDisplay = document.getElementById("score-display");
    if (!this.scoreDisplay) {
      this.scoreDisplay = document.createElement("div");
      this.scoreDisplay.id = "score-display";
      this.scoreDisplay.style.position = "absolute";
      this.scoreDisplay.style.top = "10px";
      this.scoreDisplay.style.right = "20px";
      this.scoreDisplay.style.color = "#fff";
      this.scoreDisplay.style.fontSize = "20px";
      this.scoreDisplay.style.fontWeight = "bold";
      document.body.appendChild(this.scoreDisplay);
    }

    this.updateScoreDisplay(); // Set initial score
    this.move(); // Apply initial position
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
      this.energy -= 10;
      document.getElementById("energy").style.width = this.energy + "%";
    }

    if (this.energy <= 0) {
      console.log("Game Over!");
      endGame();
    }
  }

  addPoint() {
    this.points += 1;
    this.updateScoreDisplay();
  }

  updateScoreDisplay() {
    this.scoreDisplay.textContent = `Points: ${this.points}`;
  }

  showShockFace() {
    this.element.src = "assets/trump-shock.png";
    setTimeout(() => {
      this.element.src = "assets/trump.png";
    }, 500);
  }

  showKissFace() {
    this.element.src = "assets/trump-kiss.png";
    setTimeout(() => {
      this.element.src = "assets/trump.png";
    }, 500);
  }

  remove() {
    this.element.remove();
  }
}
