class Obstacle {
  constructor(playerInstance) {
    this.player = playerInstance;
    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.style.objectFit = "contain";

    const obstacleImages = [
      "assets/dollar.png", // Dollar image
      "assets/biden-grin.png", // Biden image
      "assets/taco.png", // Taco image
      "assets/hillary.png", // Hillary image
      "assets/maga.png", // MAGA image
      "assets/fake-news.png", // Fake news image
    ];

    this.element.src =
      obstacleImages[Math.floor(Math.random() * obstacleImages.length)];
    this.element.style.width = "60px";
    this.element.style.height = "60px";
    this.element.style.left = `${Math.random() * 750}px`;
    this.element.style.top = "0px";

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

      // Handle collision with each obstacle type
      if (this.element.src.includes("dollar.png")) {
        this.player.addPoint();
        this.player.showKissFace();
        this.player.playRichSound();
      } else if (this.element.src.includes("biden-grin.png")) {
        this.player.showShockFace();
        this.player.playBidenSound();
        this.player.decreaseEnergy();
      } else if (this.element.src.includes("hillary.png")) {
        this.player.showShockFace();
        this.player.playHillarySound();
        this.player.decreaseEnergy();
      } else if (this.element.src.includes("taco.png")) {
        this.player.showShockFace();
        this.player.playTacoSound();
        this.player.decreaseEnergy();
      } else if (this.element.src.includes("maga.png")) {
        this.player.addPoint();
        this.player.showKissFace();
        this.player.playMagaSound();
        this.player.addMagaCap();
      } else if (this.element.src.includes("fake-news.png")) {
        this.player.showShockFace();
        this.player.playFakeNewsSound();
        this.player.decreaseEnergy();
      }
      this.element.remove();
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
