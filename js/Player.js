class Player {
  constructor() {
    // Create and append the player image
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

    // Initialize player properties
    this.positionX = 450;
    this.speed = 20;
    this.width = 100;
    this.energy = 100;
    this.points = 0;

    // Sound effects
    this.richSound = new Audio("assets/donald-trump-im-really-rich.mp3");
    this.bidenSound = new Audio("assets/biden-skill-issue.mp3");
    this.hillarySound = new Audio("assets/youre-not-a-nice-person.mp3");
    this.tacoSound = new Audio("assets/trump-ok.mp3");
    this.magaSound = new Audio("assets/just-like-i-promised-right.mp3");
    this.nationalAnthem = new Audio("assets/national-anthem-usa.mp3");
    this.fakeNewsSound = new Audio("assets/fake-news.mp3");
    this.gameOverSound = new Audio("assets/game-over.mp3");
    this.gameOverMusic = new Audio("assets/game-over-sound.mp3");

    // Score display
    this.scoreDisplay = document.getElementById("score-display");
    if (!this.scoreDisplay) {
      this.scoreDisplay = document.createElement("div");
      this.scoreDisplay.id = "score-display";
      document.body.appendChild(this.scoreDisplay);
    }
    this.updateScoreDisplay();

    // Life bar
    this.lifeBarContainer = document.createElement("div");
    this.lifeBarContainer.id = "life-bar-container";
    document.body.appendChild(this.lifeBarContainer);
    this.lifeBarLabel = document.createElement("div");
    this.lifeBarLabel.id = "life-bar-label";
    this.lifeBarLabel.textContent = "TRUMP LIFE";
    this.lifeBarContainer.appendChild(this.lifeBarLabel);
    this.lifeBar = document.createElement("div");
    this.lifeBar.id = "life-bar";
    this.lifeBarContainer.appendChild(this.lifeBar);
    this.maxLife = 100;
    this.currentLife = this.maxLife;
    this.updateLifeBar();

    // MAGA Cap UI
    this.magaCapCount = 0;
    this.maxCaps = 4;
    this.magaCapContainer = document.createElement("div");
    this.magaCapContainer.id = "maga-cap-container";
    document.body.appendChild(this.magaCapContainer);
    this.magaCapLabel = document.createElement("div");
    this.magaCapLabel.id = "maga-cap-label";
    this.magaCapLabel.textContent = "MAGA CAP STATUS";
    this.magaCapContainer.appendChild(this.magaCapLabel);
    this.magaCapIcons = document.createElement("div");
    this.magaCapIcons.id = "maga-cap-icons";
    this.magaCapContainer.appendChild(this.magaCapIcons);

    this.move();
    this.obstacleInterval = null;
  }

  updateLifeBar() {
    const lifePercentage = (this.currentLife / this.maxLife) * 100;
    this.lifeBar.style.width = `${lifePercentage}%`;
    if (lifePercentage > 50) {
      this.lifeBar.style.backgroundColor = "#00FF00";
    } else if (lifePercentage > 25) {
      this.lifeBar.style.backgroundColor = "#FFFF00";
    } else {
      this.lifeBar.style.backgroundColor = "#FF0000";
    }
  }

  decreaseEnergy() {
    this.currentLife -= 10;
    this.updateLifeBar();

    if (this.currentLife <= 0) {
      console.log("Game Over!");

      this.gameOverSound
        .play()
        .catch((err) => console.error("Game Over sound failed:", err));

      this.gameOverMusic
        .play()
        .catch((err) => console.error("Game Over music failed:", err));

      endGame(); // ✅ FIXED: Call the actual endGame function
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
    this.scoreDisplay.textContent = `Dollar Score: $${this.points}`;
  }

  addMagaCap() {
    if (this.magaCapCount >= this.maxCaps) return;
    const capImg = document.createElement("img");
    capImg.src = "assets/maga-cap.png";
    capImg.style.width = "50px";
    capImg.style.height = "50px";
    capImg.style.marginRight = "5px";
    this.magaCapIcons.appendChild(capImg);
    this.magaCapCount++;

    if (this.magaCapCount === this.maxCaps) {
      this.triggerCelebration();
    }
  }

  triggerCelebration() {
    if (this.obstacleInterval) {
      clearInterval(this.obstacleInterval);
      this.obstacleInterval = null;
    }

    document.getElementById("game-area").innerHTML = "";

    const celebrationContainer = document.createElement("div");
    celebrationContainer.style.position = "absolute";
    celebrationContainer.style.top = "50%";
    celebrationContainer.style.left = "50%";
    celebrationContainer.style.transform = "translate(-50%, -50%)";
    celebrationContainer.style.textAlign = "center";
    celebrationContainer.style.zIndex = "100";

    const celebrationImage = document.createElement("img");
    celebrationImage.src = "assets/trump-grit.png";
    celebrationImage.style.width = "150px";
    celebrationImage.style.height = "150px";
    celebrationImage.style.marginBottom = "20px";

    const celebrationText = document.createElement("div");
    celebrationText.innerText = "Congrats! You made America great again!";
    celebrationText.style.fontSize = "30px";
    celebrationText.style.maxWidth = "300px";
    celebrationText.style.wordWrap = "break-word";
    celebrationText.style.margin = "0 auto";
    celebrationText.style.color = "#FFD700";
    celebrationText.style.fontWeight = "bold";

    celebrationContainer.appendChild(celebrationImage);
    celebrationContainer.appendChild(celebrationText);
    document.body.appendChild(celebrationContainer);

    const celebrationSound = new Audio("assets/america-great-again.mp3");
    celebrationSound
      .play()
      .catch((err) => console.error("Celebration sound failed:", err));
    this.nationalAnthem
      .play()
      .catch((err) => console.error("National Anthem failed:", err));

    const dancingTrumpGif = document.createElement("img");
    dancingTrumpGif.src = "https://c.tenor.com/7PlmyH9C6VgAAAAd/tenor.gif";
    dancingTrumpGif.style.position = "absolute";
    dancingTrumpGif.style.top = "53%";
    dancingTrumpGif.style.transform = "translateY(-50%)";
    dancingTrumpGif.style.right = "100px";
    dancingTrumpGif.style.width = "300px";
    dancingTrumpGif.style.height = "auto";
    dancingTrumpGif.style.border = "6px solid #FF00FF";
    dancingTrumpGif.style.borderRadius = "12px";
    dancingTrumpGif.style.animation = "neonFlicker 1.5s infinite alternate";
    dancingTrumpGif.style.zIndex = "9999";
    dancingTrumpGif.style.visibility = "visible";
    dancingTrumpGif.style.display = "block";
    dancingTrumpGif.style.objectFit = "contain";
    document.body.appendChild(dancingTrumpGif);

    setTimeout(() => {
      celebrationContainer.remove();
      dancingTrumpGif.remove();
      this.stopGameWin();
    }, 8000);
  }

  stopGameWin() {
    if (this.obstacleInterval) {
      clearInterval(this.obstacleInterval);
      this.obstacleInterval = null;
    }
    document.getElementById("game-area").innerHTML = "";
    console.log("Game Won!");
    document.getElementById("start-button").style.display = "block";
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
    this.richSound.play().catch((err) => console.error("Sound failed:", err));
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

  playFakeNewsSound() {
    this.fakeNewsSound
      .play()
      .catch((err) => console.error("Fake news sound failed:", err));
  }

  remove() {
    this.element.remove();
  }
}
