let sun;

function setup() {
  createCanvas(700, 700);
  sun = new Body(100, createVector(0,0), createVector(0,0));
}

function draw() {
  translate(width/2, height/2);
  background(100);
  sun.show();
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