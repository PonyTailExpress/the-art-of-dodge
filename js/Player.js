// class Player {
//   constructor() {
//     this.element = document.createElement("img");
//     this.element.id = "player";
//     this.element.classList.add("player");
//     this.element.src = "assets/trump-grit.png"; // Default Trump image
//     this.element.style.position = "absolute";
//     this.element.style.bottom = "0px";
//     this.element.style.left = "450px";
//     this.element.style.width = "100px";
//     this.element.style.height = "100px";
//     this.element.style.objectFit = "contain";
//     this.element.style.zIndex = "10";

//     document.getElementById("game-area").appendChild(this.element);

//     // Player properties
//     this.positionX = 450;
//     this.speed = 20;
//     this.width = 100;
//     this.energy = 100;
//     this.points = 0;

//     // Sound effect
//     this.richSound = new Audio("assets/donald-trump-im-really-rich.mp3");
//     this.bidenSound = new Audio("assets/biden-skill-issue.mp3");
//     this.hillarySound = new Audio("assets/youre-not-a-nice-person-.mp3");
//     this.tacoSound = new Audio("assets/aiaiai-mexican.mp3");

//     // Score display setup
//     this.scoreDisplay = document.getElementById("score-display");
//     if (!this.scoreDisplay) {
//       this.scoreDisplay = document.createElement("div");
//       this.scoreDisplay.id = "score-display";
//       this.scoreDisplay.style.position = "absolute";
//       this.scoreDisplay.style.top = "10px";
//       this.scoreDisplay.style.right = "20px";
//       this.scoreDisplay.style.color = "#fff";
//       this.scoreDisplay.style.fontSize = "20px";
//       this.scoreDisplay.style.fontWeight = "bold";
//       document.body.appendChild(this.scoreDisplay);
//     }

//     this.move(); // Apply initial position
//   }

//   moveLeft() {
//     if (this.positionX > 0) {
//       this.positionX -= this.speed;
//       this.move();
//     }
//   }

//   moveRight() {
//     if (this.positionX + this.width < 894) {
//       this.positionX += this.speed;
//       this.move();
//     }
//   }

//   move() {
//     this.element.style.left = this.positionX + "px";
//   }

//   decreaseEnergy(amount) {
//     if (this.energy <= 0) {
//       console.log("Game Over!");
//       endGame();
//     }
//   }

//   addPoint() {
//     this.points += 1;
//     this.updateScoreDisplay();
//   }

//   updateScoreDisplay() {
//     this.scoreDisplay.textContent = `Dollar Score: $${this.points} `;
//   }

//   showShockFace() {
//     this.element.src = "assets/trump-shock.png";
//     setTimeout(() => {
//       this.element.src = "assets/trump-grit.png";
//     }, 500);
//   }

//   showKissFace() {
//     this.element.src = "assets/trump-kiss.png";
//     setTimeout(() => {
//       this.element.src = "assets/trump-grit.png";
//     }, 500);
//   }

//   playRichSound() {
//     this.richSound.currentTime = 0;
//     this.richSound.play().catch((err) => {
//       console.error("Sound failed to play:", err);
//     });
//   }

//   playBidenSound() {
//     this.bidenSound.currentTime = 0;
//     this.bidenSound.play().catch((err) => {
//       console.error("Biden sound failed:", err);
//     });
//   }

//   playHillarySound() {
//     this.hillarySound.currentTime = 0;
//     this.hillarySound.play().catch((err) => {
//       console.error("Hillary sound failed:", err);
//     });
//   }

//   playTacoSound() {
//     this.tacoSound.currentTime = 0;
//     this.tacoSound.play().catch((err) => {
//       console.error("Taco sound failed:", err);
//     });
//   }

//   remove() {
//     this.element.remove();
//   }
// }

class Player {
  constructor() {
    this.element = document.createElement("img");
    this.element.id = "player";
    this.element.src = "assets/trump-eyebrow.png"; // Default Trump image
    this.element.style.position = "absolute";
    this.element.style.bottom = "0px";
    this.element.style.left = "450px";
    this.element.style.width = "100px";
    this.element.style.height = "100px";
    this.element.style.objectFit = "contain";
    this.element.style.zIndex = "10";

    document.getElementById("game-area").appendChild(this.element);

    this.positionX = 450;
    this.speed = 20;
    this.width = 100;
    this.energy = 100; // Starting energy
    this.points = 0;

    // Sound effects
    this.richSound = new Audio("assets/donald-trump-im-really-rich.mp3");
    this.bidenSound = new Audio("assets/biden-skill-issue.mp3");
    this.hillarySound = new Audio("assets/hilary-sick-n-tired.mp3");
    this.tacoSound = new Audio("assets/trump-ok.mp3");
    this.magaSound = new Audio("assets/just-like-i-promised-right.mp3");

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

    this.updateScoreDisplay();

    // Life bar setup
    this.lifeBarContainer = document.createElement("div");
    this.lifeBarContainer.id = "life-bar-container";
    document.body.appendChild(this.lifeBarContainer);

    this.lifeBarLabel = document.createElement("div");
    this.lifeBarLabel.id = "life-bar-label";
    this.lifeBarLabel.textContent = "Trump Life"; // Title
    this.lifeBarContainer.appendChild(this.lifeBarLabel);

    this.lifeBar = document.createElement("div");
    this.lifeBar.id = "life-bar";
    this.lifeBar.style.width = "100%"; // Full width
    this.lifeBar.style.height = "20px";
    this.lifeBarContainer.appendChild(this.lifeBar);

    this.maxLife = 100;
    this.currentLife = this.maxLife;

    this.updateLifeBar();

    this.move(); // Apply initial position
  }

  updateLifeBar() {
    const lifePercentage = (this.currentLife / this.maxLife) * 100;
    this.lifeBar.style.width = `${lifePercentage}%`;

    if (lifePercentage > 50) {
      this.lifeBar.style.backgroundColor = "#00FF00"; // Green (good life)
    } else if (lifePercentage > 25) {
      this.lifeBar.style.backgroundColor = "#FFFF00"; // Yellow (medium life)
    } else {
      this.lifeBar.style.backgroundColor = "#FF0000"; // Red (low life)
    }
  }

  decreaseEnergy() {
    this.currentLife -= 10;
    this.updateLifeBar();

    if (this.currentLife <= 0) {
      console.log("Game Over!");
      endGame();
    }
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
      this.element.src = "assets/trump-eyebrow.png";
    }, 500);
  }

  showKissFace() {
    this.element.src = "assets/trump-kiss.png";
    setTimeout(() => {
      this.element.src = "assets/trump-eyebrow.png";
    }, 500);
  }

  playRichSound() {
    this.richSound
      .play()
      .catch((err) => console.error("Sound failed to play:", err));
  }

  playBidenSound() {
    this.bidenSound
      .play()
      .catch((err) => console.error("Biden sound failed:", err));
  }

  playHillarySound() {
    this.hillarySound
      .play()
      .catch((err) => console.error("Hillary sound failed:", err));
  }

  playTacoSound() {
    this.tacoSound
      .play()
      .catch((err) => console.error("Taco sound failed:", err));
  }

  playMagaSound() {
    this.magaSound
      .play()
      .catch((err) => console.error("MAGA sound failed:", err));
  }
  remove() {
    this.element.remove();
  }
}
