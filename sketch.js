function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(100);
}

function Body(_mass, _pos, _vel) {
  this.mass = _mass;
  this.pos = _pos;
  this.vel = _vel;
  this.r = this.mass;

  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r)
  }
}