// class Player {
//   constructor() {
//     this.element = document.createElement("img");
//     this.element.id = "player";
//     this.element.src = "assets/trump-eyebrow.png"; // Default Trump image
//     this.element.style.position = "absolute";
//     this.element.style.bottom = "0px";
//     this.element.style.left = "450px";
//     this.element.style.width = "100px";
//     this.element.style.height = "100px";
//     this.element.style.objectFit = "contain";
//     this.element.style.zIndex = "10";

//     document.getElementById("game-area").appendChild(this.element);

//     this.positionX = 450;
//     this.speed = 20;
//     this.width = 100;
//     this.energy = 100; // Starting energy
//     this.points = 0;

//     // Sound effects
//     this.richSound = new Audio("assets/donald-trump-im-really-rich.mp3");
//     this.bidenSound = new Audio("assets/biden-skill-issue.mp3");
//     this.hillarySound = new Audio("assets/hilary-sick-n-tired.mp3");
//     this.tacoSound = new Audio("assets/trump-ok.mp3");
//     this.magaSound = new Audio("assets/just-like-i-promised-right.mp3");

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

//     this.updateScoreDisplay();

//     // Life bar setup
//     this.lifeBarContainer = document.createElement("div");
//     this.lifeBarContainer.id = "life-bar-container";
//     document.body.appendChild(this.lifeBarContainer);

//     this.lifeBarLabel = document.createElement("div");
//     this.lifeBarLabel.id = "life-bar-label";
//     this.lifeBarLabel.textContent = "Trump Life"; // Title
//     this.lifeBarContainer.appendChild(this.lifeBarLabel);

//     this.lifeBar = document.createElement("div");
//     this.lifeBar.id = "life-bar";
//     this.lifeBar.style.width = "100%"; // Full width
//     this.lifeBar.style.height = "20px";
//     this.lifeBarContainer.appendChild(this.lifeBar);

//     this.maxLife = 100;
//     this.currentLife = this.maxLife;

//     this.updateLifeBar();

//     // MAGA Cap Status UI
//     this.magaCapCount = 0;
//     this.maxCaps = 5;

//     this.magaCapContainer = document.createElement("div");
//     this.magaCapContainer.id = "maga-cap-container";

//     this.magaCapLabel = document.createElement("div");
//     this.magaCapLabel.id = "maga-cap-label";
//     this.magaCapLabel.textContent = "MAGA Cap Status";

//     this.magaCapIcons = document.createElement("div");
//     this.magaCapIcons.id = "maga-cap-icons";

//     this.magaCapContainer.appendChild(this.magaCapLabel);
//     this.magaCapContainer.appendChild(this.magaCapIcons);
//     document.body.appendChild(this.magaCapContainer);

//     this.move(); // Apply initial position
//   }

//   updateLifeBar() {
//     const lifePercentage = (this.currentLife / this.maxLife) * 100;
//     this.lifeBar.style.width = `${lifePercentage}%`;

//     if (lifePercentage > 50) {
//       this.lifeBar.style.backgroundColor = "#00FF00"; // Green (good life)
//     } else if (lifePercentage > 25) {
//       this.lifeBar.style.backgroundColor = "#FFFF00"; // Yellow (medium life)
//     } else {
//       this.lifeBar.style.backgroundColor = "#FF0000"; // Red (low life)
//     }
//   }

//   decreaseEnergy() {
//     this.currentLife -= 10;
//     this.updateLifeBar();

//     if (this.currentLife <= 0) {
//       console.log("Game Over!");
//       endGame();
//     }
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

//   addPoint() {
//     this.points += 1;
//     this.updateScoreDisplay();
//   }

//   updateScoreDisplay() {
//     this.scoreDisplay.textContent = `Dollar Score: $${this.points}`;
//   }

//   addMagaCap() {
//     if (!this.magaCapCount) this.magaCapCount = 0;
//     if (this.magaCapCount >= 5) return;

//     const capImg = document.createElement("img");
//     capImg.src = "assets/maga-cap.png";
//     capImg.style.width = "50px";
//     capImg.style.height = "50px";
//     capImg.style.marginRight = "5px";

//     if (!this.magaCapContainer) {
//       this.magaCapContainer = document.createElement("div");
//       this.magaCapContainer.id = "maga-cap-container";
//       this.magaCapContainer.style.position = "absolute";
//       this.magaCapContainer.style.top = "100px";
//       this.magaCapContainer.style.right = "20px";
//       this.magaCapContainer.style.display = "flex";
//       document.body.appendChild(this.magaCapContainer);
//     }

//     this.magaCapContainer.appendChild(capImg);
//     this.magaCapCount++;

//     if (this.magaCapCount === 5) {
//       this.triggerCelebration();
//     }
//   }

//   triggerCelebration() {
//     // Create celebration container
//     const celebrationContainer = document.createElement("div");
//     celebrationContainer.style.position = "absolute";
//     celebrationContainer.style.top = "50%"; // Center vertically
//     celebrationContainer.style.left = "50%"; // Center horizontally
//     celebrationContainer.style.transform = "translate(-50%, -50%)"; // Adjust for exact center
//     celebrationContainer.style.textAlign = "center"; // Center the text and image
//     celebrationContainer.style.zIndex = "100"; // Ensure it's on top of everything else

//     // Create the celebration image (trump-grit.png)
//     const celebrationImage = document.createElement("img");
//     celebrationImage.src = "assets/trump-grit.png"; // Trump Grit image for celebration
//     celebrationImage.style.width = "150px"; // Adjust size of the image
//     celebrationImage.style.height = "150px"; // Adjust size of the image
//     celebrationImage.style.marginBottom = "20px"; // Space between image and text

//     // Create the celebration text
//     const celebrationText = document.createElement("div");
//     celebrationText.innerText = "You collected all 5 MAGA caps! 🎉";
//     celebrationText.style.fontSize = "30px"; // Text size
//     celebrationText.style.color = "#FFD700"; // Gold color
//     celebrationText.style.fontWeight = "bold"; // Bold text

//     // Append the image and text to the celebration container
//     celebrationContainer.appendChild(celebrationImage);
//     celebrationContainer.appendChild(celebrationText);

//     // Append the celebration container to the body
//     document.body.appendChild(celebrationContainer);

//     // Play celebration sound
//     const celebrationSound = new Audio("assets/america-great-again.mp3");
//     celebrationSound
//       .play()
//       .catch((err) => console.error("Celebration sound failed:", err));

//     // Optionally, hide the celebration after some time (e.g., 3 seconds)
//     setTimeout(() => {
//       celebrationContainer.remove(); // Remove the celebration after 3 seconds
//     }, 3000);
//   }

//   showShockFace() {
//     this.element.src = "assets/trump-shock.png";
//     setTimeout(() => {
//       this.element.src = "assets/trump-eyebrow.png";
//     }, 500);
//   }

//   showKissFace() {
//     this.element.src = "assets/trump-kiss.png";
//     setTimeout(() => {
//       this.element.src = "assets/trump-eyebrow.png";
//     }, 500);
//   }

//   playRichSound() {
//     this.richSound
//       .play()
//       .catch((err) => console.error("Sound failed to play:", err));
//   }

//   playBidenSound() {
//     this.bidenSound
//       .play()
//       .catch((err) => console.error("Biden sound failed:", err));
//   }

//   playHillarySound() {
//     this.hillarySound
//       .play()
//       .catch((err) => console.error("Hillary sound failed:", err));
//   }

//   playTacoSound() {
//     this.tacoSound
//       .play()
//       .catch((err) => console.error("Taco sound failed:", err));
//   }

//   playMagaSound() {
//     this.magaSound
//       .play()
//       .catch((err) => console.error("MAGA sound failed:", err));
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

    // MAGA Cap Status UI
    this.magaCapCount = 0;
    this.maxCaps = 5;

    this.magaCapContainer = document.createElement("div");
    this.magaCapContainer.id = "maga-cap-container";

    this.magaCapLabel = document.createElement("div");
    this.magaCapLabel.id = "maga-cap-label";
    this.magaCapLabel.textContent = "MAGA Cap Status";

    this.magaCapIcons = document.createElement("div");
    this.magaCapIcons.id = "maga-cap-icons";

    this.magaCapContainer.appendChild(this.magaCapLabel);
    this.magaCapContainer.appendChild(this.magaCapIcons);
    document.body.appendChild(this.magaCapContainer);

    this.move(); // Apply initial position

    // Game Loop Interval for obstacles (if needed)
    this.obstacleInterval = null; // To store the interval for falling obstacles
  }

  // Method to stop the game (stop obstacles and any ongoing actions)
  stopGame() {
    if (this.obstacleInterval) {
      clearInterval(this.obstacleInterval); // Stop obstacles from falling
      this.obstacleInterval = null; // Clear the interval reference
    }
    console.log("Game Over!");
    // Optionally, you can disable movement or other actions here
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
      this.stopGame(); // Stop the game when energy runs out
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

    if (!this.magaCapContainer) {
      this.magaCapContainer = document.createElement("div");
      this.magaCapContainer.id = "maga-cap-container";
      this.magaCapContainer.style.position = "absolute";
      this.magaCapContainer.style.top = "100px";
      this.magaCapContainer.style.right = "20px";
      this.magaCapContainer.style.display = "flex";
      document.body.appendChild(this.magaCapContainer);
    }

    this.magaCapContainer.appendChild(capImg);
    this.magaCapCount++;

    if (this.magaCapCount === this.maxCaps) {
      this.triggerCelebration(); // Trigger celebration when 5 MAGA caps are collected
    }
  }

  triggerCelebration() {
    // Create celebration container
    const celebrationContainer = document.createElement("div");
    celebrationContainer.style.position = "absolute";
    celebrationContainer.style.top = "50%"; // Center vertically
    celebrationContainer.style.left = "50%"; // Center horizontally
    celebrationContainer.style.transform = "translate(-50%, -50%)"; // Adjust for exact center
    celebrationContainer.style.textAlign = "center"; // Center the text and image
    celebrationContainer.style.zIndex = "100"; // Ensure it's on top of everything else

    // Create the celebration image (trump-grit.png)
    const celebrationImage = document.createElement("img");
    celebrationImage.src = "assets/trump-grit.png"; // Trump Grit image for celebration
    celebrationImage.style.width = "150px"; // Adjust size of the image
    celebrationImage.style.height = "150px"; // Adjust size of the image
    celebrationImage.style.marginBottom = "20px"; // Space between image and text

    // Create the celebration text
    const celebrationText = document.createElement("div");
    celebrationText.innerText = "You collected all 5 MAGA caps! 🎉";
    celebrationText.style.fontSize = "30px"; // Text size
    celebrationText.style.color = "#FFD700"; // Gold color
    celebrationText.style.fontWeight = "bold"; // Bold text

    // Append the image and text to the celebration container
    celebrationContainer.appendChild(celebrationImage);
    celebrationContainer.appendChild(celebrationText);

    // Append the celebration container to the body
    document.body.appendChild(celebrationContainer);

    // Play celebration sound
    const celebrationSound = new Audio("assets/america-great-again.mp3");
    celebrationSound
      .play()
      .catch((err) => console.error("Celebration sound failed:", err));

    const dancingTrumpGif = document.createElement("img");
    dancingTrumpGif.src = "https://c.tenor.com/7PlmyH9C6VgAAAAd/tenor.gif"; // Trump dancing GIF URL

    // Apply styles to ensure the GIF is displayed correctly
    dancingTrumpGif.style.position = "absolute"; // Absolutely position it
    dancingTrumpGif.style.top = "53%"; // Vertically center it (50% from the top)
    dancingTrumpGif.style.transform = "translateY(-50%)"; // Adjust for vertical center alignment
    dancingTrumpGif.style.right = "100px"; // Position 10px from the right

    // Set width and height as needed
    dancingTrumpGif.style.width = "300px"; // Fixed width
    dancingTrumpGif.style.height = "auto"; // Maintain aspect ratio

    dancingTrumpGif.style.border = "6px solid #FF00FF"; // Neon pink border
    dancingTrumpGif.style.borderRadius = "12px";

    // Additional 80s retro effect with some flickering animation (optional)
    dancingTrumpGif.style.animation = "neonFlicker 1.5s infinite alternate"; // Flicker effect

    // Set higher z-index to bring it to the front
    dancingTrumpGif.style.zIndex = "9999";

    // Ensure the GIF is not clipped or hidden
    dancingTrumpGif.style.visibility = "visible"; // Make sure the GIF is visible
    dancingTrumpGif.style.overflow = "visible"; // Ensure no clipping
    dancingTrumpGif.style.overflowClipMargin = "0"; // Remove clipping margin

    // Explicitly ensure it doesn't get hidden by any parent containers
    dancingTrumpGif.style.display = "block"; // Ensure it's treated as a block element
    dancingTrumpGif.style.objectFit = "contain"; // Maintain aspect ratio

    // Append the GIF to the body (or game area)
    document.body.appendChild(dancingTrumpGif);

    // Stop the game after celebration
    this.stopGame();

    // Optionally, hide the celebration and dancing Trump GIF after 3 seconds
    // setTimeout(() => {
    //   celebrationContainer.remove(); // Remove the celebration
    //   dancingTrumpGif.remove(); // Remove the dancing Trump GIF
    // }, 3000); // 3 seconds
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
