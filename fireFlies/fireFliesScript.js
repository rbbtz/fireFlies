let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

function mouseMoved() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].hover(mouseX, mouseY);
  }
}

function mouseClicked() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].click(mouseX, mouseY);
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.home = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.r = random(5, 30);
    this.alpha = 100;
    this.hovering = false;
    this.clicked = false;
    this.color = color(220, 255, 170, 100);
    this.flashOn = false;
    this.flashTime = random(30, 120); // Random time for flash to stay on
    this.flashTimer = this.flashTime; // Timer for the flash
    this.maxSpeed = random(1, 4);
  }

  update() {
    if (this.hovering) {
      let dir = p5.Vector.sub(this.pos, createVector(mouseX, mouseY));
      dir.setMag(10);
      this.acc.add(dir);
    }
    if (this.clicked) {
      this.acc.add(createVector(random(-5, 5), random(-5, 5)));
      this.alpha = lerp(this.alpha, 255, 0.1);
    } else {
      this.alpha = lerp(this.alpha, 100, 0.1);
    }
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // Flashing effect
    if (this.flashTimer > 0) {
      this.flashTimer--;
    } else {
      this.flashTimer = this.flashTime;
      this.flashOn = !this.flashOn;
    }
    if (this.flashOn) {
      this.alpha = lerp(this.alpha, 255, 0.1);
    } else {
      this.alpha = lerp(this.alpha, 100, 0.1);
    }
  }

  display() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    ellipse(this.pos.x, this.pos.y, this.r);
  }

  hover(x, y) {
    let d = dist(x, y, this.pos.x, this.pos.y);
    if (d < 50) {
      this.hovering = true;
    } else {
      this.hovering = false;
      this.vel.mult(0.95);
    }
  }

  click(x, y) {
    let d = dist(x, y, this.pos.x, this.pos.y);
    if (d < 50) {
      this.clicked = true;
    }
  }
}
