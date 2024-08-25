let sun;
let planet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sun = new Body(100, createVector(0,0), createVector(0,0));

  let r = random(sun.r, min(windowWidth/2, windowHeight/2));
  let theta = random(TWO_PI);
  let planetPos = createVector(r*cos(theta), r*sin(theta));
  planet = new Body(25, planetPos, createVector(0,0));
}

function draw() {
  translate(width/2, height/2);
  background(100);
  planet.show();
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